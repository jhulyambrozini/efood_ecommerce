import { useState, useEffect, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../ui/Button'
import FinishOrder from './FinishOrder'
import InputGroup from '../../ui/InputGroup'

import { FormContainer } from './styles'
import { calculeTotalPrice, formatPrice } from '../../../utils'

import { RootState } from '../../../store'
import { clearCart } from '../../../store/reducers/cart'
import { changeComponent } from '../../../store/reducers/sideBar'

import { usePurchaseMutation } from '../../../services/api'

const Form = () => {
  const { itemsCart } = useSelector((state: RootState) => state.cart)
  const [isDelivery, setIsDelivery] = useState(true)
  const [inputsVoidsMessage, setInputsVoidsMessage] = useState(false)
  const dispatch = useDispatch()
  const [purchase, { isLoading, isSuccess, data, isError }] =
    usePurchaseMutation()

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

  const getMessageError = (field: string, message?: string) => {
    const isTouched = field in form.touched
    const isInvalid = field in form.errors

    if (isTouched && isInvalid) return message
    return false
  }

  const handlePayment = (event: MouseEvent) => {
    event.preventDefault()

    const isInvalid =
      form.values.adress === '' ||
      form.values.name === '' ||
      form.values.city === '' ||
      form.values.zipCode === '' ||
      form.values.number === ''

    if (isInvalid) setInputsVoidsMessage(true)
    else {
      setInputsVoidsMessage(false)
      setIsDelivery(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit} data-testid="form">
      <FormContainer>
        {isSuccess && data ? (
          <FinishOrder orderId={data.orderId} />
        ) : isDelivery ? (
          <div data-testid="delivery">
            <div className="margin-bottom">
              <h3>Entrega</h3>

              <InputGroup
                id="name"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.name}
                label="Quem irá receber*"
                type="text"
              >
                <small>{getMessageError('name', form.errors.name)}</small>
              </InputGroup>

              <InputGroup
                id="adress"
                label="Endereço*"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.adress}
                type="text"
              >
                <small>{getMessageError('adress', form.errors.adress)}</small>
              </InputGroup>

              <InputGroup
                id="city"
                label="Cidade*"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.city}
                type="text"
              >
                <small>{getMessageError('city', form.errors.city)}</small>
              </InputGroup>

              <div className="flex">
                <InputGroup
                  id="zipCode"
                  label="CPF*"
                  maxWidth="9.68rem"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.zipCode}
                  mask="999.999.999-99"
                  type="text"
                >
                  <small>
                    {getMessageError('zipCode', form.errors.zipCode)}
                  </small>
                </InputGroup>

                <InputGroup
                  maxWidth="9.68rem"
                  id="number"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.number}
                  type="number"
                  label="Número*"
                >
                  <small>{getMessageError('number', form.errors.number)}</small>
                </InputGroup>
              </div>

              <InputGroup
                label="Complemento (opicional)"
                id="complement"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.complement}
                type="text"
              >
                <small>
                  {getMessageError('complement', form.errors.complement)}
                </small>
              </InputGroup>
            </div>

            <div className="controls">
              <Button
                background="secundary"
                title="Continuar com o pagamento"
                label="Continuar com o pagamento"
                type="button"
                onClick={(event: MouseEvent) => handlePayment(event)}
              />
              <Button
                background="secundary"
                title="Voltar ao carrinho"
                label="Voltar ao carrinho"
                type="button"
                onClick={(e: MouseEvent) => {
                  dispatch(changeComponent('cart'))
                  e.preventDefault()
                }}
              />
            </div>
            {inputsVoidsMessage && (
              <p style={{ textAlign: 'center' }}>
                Preencha os campos obrigatórios!
              </p>
            )}
          </div>
        ) : (
          <div data-testid="payment">
            <div className="margin-bottom">
              <h3>
                Pagamento - Valor a pagar{' '}
                {itemsCart && formatPrice(calculeTotalPrice(itemsCart))}
              </h3>

              <InputGroup
                label="Nome no cartão*"
                id="cardName"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.cardName}
                type="text"
              >
                <small>
                  {getMessageError('cardName', form.errors.cardName)}
                </small>
              </InputGroup>

              <div className="flex">
                <InputGroup
                  label="Número do cartão*"
                  maxWidth="228px"
                  id="cardNumber"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.cardNumber}
                  mask="9999 9999 9999 9999"
                  type="text"
                >
                  <small>
                    {getMessageError('cardNumber', form.errors.cardNumber)}
                  </small>
                </InputGroup>

                <InputGroup
                  maxWidth="87px"
                  label="CVV*"
                  id="cardCode"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.cardCode}
                  mask="999"
                  type="text"
                >
                  <small>
                    {getMessageError('cardCode', form.errors.cardCode)}
                  </small>
                </InputGroup>
              </div>

              <div className="flex margin-bottom">
                <InputGroup
                  label="Mês de expiração*"
                  maxWidth="9.68rem"
                  id="expiresMonth"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.expiresMonth}
                  mask="99"
                  type="text"
                >
                  <small>
                    {getMessageError('expiresMonth', form.errors.expiresMonth)}
                  </small>
                </InputGroup>

                <InputGroup
                  id="expiresYear"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.expiresYear}
                  mask="99"
                  label="Ano de expiração*"
                  maxWidth="9.68rem"
                  type="text"
                >
                  <small>
                    {getMessageError('expiresYear', form.errors.expiresYear)}
                  </small>
                </InputGroup>
              </div>
            </div>

            <div className="controls">
              <Button
                background="secundary"
                title="Finalizar o pagamento"
                label={
                  isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'
                }
                type="submit"
              />

              <Button
                background="secundary"
                title="Voltar para a edição de endereço"
                label="Voltar para a edição de endereço"
                type="button"
                onClick={(e: MouseEvent) => {
                  setIsDelivery(true)
                  e.preventDefault()
                }}
              />
            </div>

            {isError && <p>Oops! Algo deu errado, tente novamente</p>}
          </div>
        )}
      </FormContainer>
    </form>
  )
}

export default Form
