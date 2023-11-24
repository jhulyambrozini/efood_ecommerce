import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Button from '../ui/Button/Button'

import { FormContainer } from './styles'

import { changeComponent, closeSideBar } from '../../store/reducers/sideBar'
import { clearCart } from '../../store/reducers/cart'

type Props = {
  orderId: string
}

const FinishOrder = ({ orderId }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToHome = () => {
    dispatch(closeSideBar())
    dispatch(clearCart())
    dispatch(changeComponent('cart'))
    navigate('/')
  }
  return (
    <FormContainer>
      <h3>Pedido realizado - {orderId} </h3>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <br />
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.{' '}
      </p>
      <br />
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <br />
      <p className="margin-bottom">
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>

      <Button
        background="secundary"
        title="Concluir o pedido"
        type="button"
        onClick={goToHome}
      >
        Concluir
      </Button>
    </FormContainer>
  )
}

export default FinishOrder
