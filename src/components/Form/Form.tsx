import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button/Button'
import FinishOrder from './FinishOrder'

import { FormContainer, InputGroup } from './styles'
import { calculeTotalPrice, formatPrice } from '../../utils'

import { RootReducer } from '../../store'
import { changeComponent } from '../../store/reducers/sideBar'
import { usePurchaseMutation } from '../../services/api'
import { clearCart } from '../../store/reducers/cart'

const Form = () => {
  const { itemsCart } = useSelector((state: RootReducer) => state.cart)
  const [isDelivery, setIsDelivery] = useState(true)
  const dispatch = useDispatch()
  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
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
        .min(14, 'O campo precisa ter no mínimo 14 caracteres')
        .max(14, 'O campo precisa ter no máximo 14 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),

      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        await purchase({
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
      } catch (erro) {
        console.log(erro)
      }
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearCart())
    }
  }, [isSuccess, dispatch])

  return (
    <form onSubmit={form.handleSubmit}>
      <FormContainer>
        {isSuccess && data ? (
          <FinishOrder orderId={data.orderId} />
        ) : isDelivery ? (
          <>
            <div className="margin-bottom">
              <h3>Entrega</h3>

              <InputGroup>
                <label htmlFor="name">Quem irá receber</label>

                <input
                  name="name"
                  id="name"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.name}
                  type="text"
                  className={checkInputHasError('name') ? 'error' : ''}
                />
              </InputGroup>

              <InputGroup>
                <label htmlFor="adress">Endereço</label>

                <input
                  name="adress"
                  id="adress"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.adress}
                  type="text"
                  className={checkInputHasError('adress') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">Cidade</label>

                <input
                  name="city"
                  id="city"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.city}
                  type="text"
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </InputGroup>

              <div className="flex">
                <InputGroup maxWidth="9.68rem">
                  <label htmlFor="zipCode">CPF</label>

                  <InputMask
                    name="zipCode"
                    id="zipCode"
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.zipCode}
                    type="text"
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="999.999.999-99"
                  />
                </InputGroup>

                <InputGroup maxWidth="9.68rem">
                  <label htmlFor="number">Número</label>

                  <input
                    name="number"
                    id="number"
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.number}
                    type="number"
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </InputGroup>
              </div>

              <InputGroup>
                <label htmlFor="complement">Complemento (opicional)</label>

                <input
                  name="complement"
                  id="complement"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.complement}
                  type="text"
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </InputGroup>
            </div>

            <Button
              background="secundary"
              title="Continuar com o pagamento"
              type="button"
              onClick={(e) => {
                setIsDelivery(false)
                e.preventDefault()
              }}
            >
              Continuar com o pagamento
            </Button>
            <Button
              background="secundary"
              title="Clique aqui para valtar ao carrinho"
              type="button"
              onClick={(e) => {
                dispatch(changeComponent('cart'))
                e.preventDefault()
              }}
            >
              Voltar para o carrinho
            </Button>
          </>
        ) : (
          <>
            <div className="margin-bottom">
              <h3>
                Pagameno - Valor a pagar{' '}
                {itemsCart && formatPrice(calculeTotalPrice(itemsCart))}
              </h3>

              <InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>

                <input
                  name="cardName"
                  id="cardName"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.cardName}
                  type="text"
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </InputGroup>

              <div className="flex">
                <InputGroup maxWidth="14rem">
                  <label htmlFor="cardNumber">Número do cartão</label>

                  <InputMask
                    name="cardNumber"
                    id="cardNumber"
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.cardNumber}
                    type="text"
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </InputGroup>

                <InputGroup maxWidth="5.4375rem">
                  <label htmlFor="cardCode">CVV</label>

                  <InputMask
                    name="cardCode"
                    id="cardCode"
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.cardCode}
                    type="text"
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </InputGroup>
              </div>

              <div className="flex margin-bottom">
                <InputGroup maxWidth="9.68rem">
                  <label htmlFor="expiresMonth">Mês de expiração</label>

                  <InputMask
                    name="expiresMonth"
                    id="expiresMonth"
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.expiresMonth}
                    type="text"
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </InputGroup>

                <InputGroup maxWidth="9.68rem">
                  <label htmlFor="expiresYear">Ano de expiração</label>

                  <InputMask
                    name="expiresYear"
                    id="expiresYear"
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values.expiresYear}
                    type="text"
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </InputGroup>
              </div>
            </div>

            <Button
              background="secundary"
              title="Finalizar o pagamento"
              type="submit"
            >
              {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
            </Button>
            <Button
              background="secundary"
              title="voltar para a edição de endereço"
              type="button"
              onClick={(e) => {
                setIsDelivery(true)
                e.preventDefault()
              }}
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

