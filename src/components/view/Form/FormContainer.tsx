import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import FinishOrder from './FinishOrder'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'

import { FormContainer } from './styles'

import { RootState } from '../../../store'
import { clearCart } from '../../../store/reducers/cart'
import { openFormDelivery } from '../../../store/reducers/formDelivery'

import { usePurchaseMutation } from '../../../services/api'

const Form = () => {
  const { itemsCart } = useSelector((state: RootState) => state.cart)
  const { isDeliveryOpen } = useSelector(
    (state: RootState) => state.formDelivery
  )

  const dispatch = useDispatch()
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

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
        .required('O nome é obrigatório'),
      adress: Yup.string().required('O endereço é obrigatório'),
      city: Yup.string().required('O nome da cidade é obrigatório'),
      zipCode: Yup.string()
        .min(14, 'O CPF precisa ter no mínimo 14 caracteres')
        .max(14, 'O CPF pode ter no máximo 14 caracteres')
        .required('O CPF é obrigatório'),
      number: Yup.string().required('O número é obrigatório'),

      cardName: Yup.string()
        .min(5, 'O nome no cartão precisa ter pelo menos 5 caracteres')
        .required('O nome no cartão é obrigatório'),
      cardNumber: Yup.string().required('O número do cartão é obrigatório'),
      cardCode: Yup.string().required('O CVV é obrigatório'),
      expiresMonth: Yup.string().required('O mês de expirção é obrigatório'),
      expiresYear: Yup.string().required('O ano de expiração é obrigatório')
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
      dispatch(openFormDelivery())
    }
  }, [isSuccess, dispatch])

  return (
    <FormContainer onSubmit={form.handleSubmit}>
      {isSuccess && data ? (
        <FinishOrder orderId={data.orderId} />
      ) : isDeliveryOpen ? (
        <DeliveryForm form={form} />
      ) : (
        <PaymentForm form={form} />
      )}
    </FormContainer>
  )
}

export default Form
