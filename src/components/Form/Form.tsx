import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button/Button'
import InputGroup from '../InputGroup/InputGroup'

import { FormContainer } from './styles'
import { calculeTotalPrice, formatPrice } from '../../utils'

import { RootReducer } from '../../store'
import { changeComponent } from '../../store/reducers/sideBar'
import { usePurchaseMutation } from '../../services/api'

const Form = () => {
  const { itemsCart } = useSelector((state: RootReducer) => state.cart)
  const [delivery, setDelivery] = useState(true)
  const dispatch = useDispatch()
  const [purchase] = usePurchaseMutation()

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const finishPayment = () => {
    form.handleSubmit()
    dispatch(changeComponent('finishOrder'))
  }

  const form = useFormik({
    initialValues: {
      name: '',
      zipCode: '',
      number: '',
      adress: '',
      city: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa ter no mínimo 9 caracteres')
        .max(9, 'O campo precisa ter no máximo 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        !delivery ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        !delivery ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        !delivery ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        !delivery ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        !delivery ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          adress: {
            description: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: itemsCart.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  return (
    <form onSubmit={form.handleSubmit}>
      <FormContainer>
        {delivery ? (
          <>
            <div className="margin-bottom">
              <h3>Entrega</h3>

              <InputGroup
                id="name"
                label="Quem irá receber"
                type="text"
                className={checkInputHasError('name') ? 'error' : ''}
                name="name"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.name}
              />
              <InputGroup
                id="adress"
                label="Endereço"
                type="text"
                className={checkInputHasError('adress') ? 'error' : ''}
                name="adress"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.adress}
              />
              <InputGroup
                id="city"
                label="Cidade"
                type="text"
                className={checkInputHasError('city') ? 'error' : ''}
                name="city"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.city}
              />

              <div className="flex">
                <InputGroup
                  id="zipCode"
                  label="CPF"
                  type="number"
                  maxWidth="9.68rem"
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                  name="zipCode"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.zipCode}
                />
                <InputGroup
                  id="number"
                  label="Número"
                  type="number"
                  maxWidth="9.68rem"
                  className={checkInputHasError('number') ? 'error' : ''}
                  name="number"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.number}
                />
              </div>

              <InputGroup
                id="complement"
                label="Complemento (opicional)"
                type="text"
                className={checkInputHasError('complement') ? 'error' : ''}
                name="complement"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.complement}
              />
            </div>

            <Button
              background="secundary"
              title="Clique aqui para continuar com o pagamento"
              type="button"
              onClick={() => setDelivery(false)}
            >
              Continuar com o pagamento
            </Button>
            <Button
              background="secundary"
              title="Clique aqui para valtar ao carrinho"
              type="button"
              onClick={() => dispatch(changeComponent('cart'))}
            >
              Voltar para o carrinho
            </Button>
          </>
        ) : (
          <>
            <div className="margin-bottom">
              <h3>
                Pagameno - Valor a pagar{' '}
                {itemsCart && formatPrice(calculeTotalPrice(itemsCart))}{' '}
              </h3>

              <InputGroup
                id="cardName"
                label="Nome do cartão"
                type="text"
                className={checkInputHasError('cardName') ? 'error' : ''}
                name="cardName"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.cardName}
              />

              <div className="flex">
                <InputGroup
                  maxWidth="14rem"
                  id="cardNumber"
                  label="Número do cartão"
                  type="text"
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  name="cardNumber"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.cardNumber}
                />
                <InputGroup
                  maxWidth="5.4375rem"
                  id="cardCode"
                  label="CVV"
                  type="number"
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  name="cardCode"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.cardCode}
                />
              </div>

              <div className="flex margin-bottom">
                <InputGroup
                  maxWidth="9.68rem"
                  id="expiresMonth"
                  label="Mês de vencimento"
                  type="number"
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                  name="expiresMonth"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.expiresMonth}
                />
                <InputGroup
                  maxWidth="9.68rem"
                  id="expiresYear"
                  label="Ano de vencimento"
                  type="number"
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                  name="expiresYear"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.expiresYear}
                />
              </div>
            </div>

            <Button
              background="secundary"
              title="Clique aqui para finalizar o pagamento"
              type="submit"
              onClick={form.handleSubmit}
            >
              Finalizar pagamento
            </Button>
            <Button
              background="secundary"
              title="Clique aqui para voltar para a edição de endereço"
              type="button"
              onClick={() => setDelivery(true)}
            >
              Voltar para a edição de endereço
            </Button>
          </>
        )}
      </FormContainer>
    </form>
  )
}

export default Form
