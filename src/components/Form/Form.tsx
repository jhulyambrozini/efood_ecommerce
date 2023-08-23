import Button from '../Button/Button'
import { InputGroup, FormContainer } from './styles'
import Aside from '../Aside/Aside'
import { useDispatch } from 'react-redux'
import { closeForm } from '../../store/reducers/form'
import { clear, open } from '../../store/reducers/cart'

const Form = () => {
  const dispatch = useDispatch()

  const finishPurchase = () => {
    dispatch(closeForm())
    dispatch(clear())
  }
  const backToCart = () => {
    dispatch(closeForm())
    dispatch(open())
  }
  return (
    <Aside>
      <FormContainer>
        {/* Entrega */}
        <>
          <h3>Entrega</h3>

          <InputGroup>
            <label htmlFor="">Quem irá receber</label>
            <input type="text" />
          </InputGroup>

          <InputGroup>
            <label htmlFor="">Endereço</label>
            <input type="text" />
          </InputGroup>

          <InputGroup>
            <label htmlFor="">Cidade</label>
            <input type="text" />
          </InputGroup>

          <div className="flex">
            <InputGroup maxWidth="9.68rem">
              <label htmlFor="">CPF</label>
              <input type="number" />
            </InputGroup>
            <InputGroup maxWidth="9.68rem">
              <label htmlFor="">Número</label>
              <input type="number" />
            </InputGroup>
          </div>

          <InputGroup className="margin-bottom">
            <label htmlFor="">Complemento (opicional)</label>
            <input type="text" />
          </InputGroup>

          <Button
            background="secundary"
            title="Clique aqui para continuar com o pagamento"
            type="button"
          >
            Continuar com o pagamento
          </Button>
          <Button
            background="secundary"
            title="Clique aqui para valtar ao carrinho"
            type="button"
            onClick={backToCart}
          >
            Voltar para o carrinho
          </Button>
        </>

        {/* Pagamento */}
        <>
          <h3>Pagameno - Valor a pagar R$ 190,00</h3>

          <InputGroup>
            <label htmlFor="">Nome do cartão</label>
            <input type="text" />
          </InputGroup>

          <div className="flex">
            <InputGroup maxWidth="14rem">
              <label htmlFor="">Número do cartão</label>
              <input type="text" />
            </InputGroup>

            <InputGroup maxWidth="5.4375rem">
              <label htmlFor="">CVV</label>
              <input type="text" />
            </InputGroup>
          </div>

          <div className="flex margin-bottom">
            <InputGroup maxWidth="9.68rem">
              <label htmlFor="">Mês de vencimento</label>
              <input type="text" />
            </InputGroup>

            <InputGroup maxWidth="9.68rem">
              <label htmlFor="">Ano de vencimento</label>
              <input type="text" />
            </InputGroup>
          </div>

          <Button
            background="secundary"
            title="Clique aqui para finalizar o pagamento"
            type="submit"
          >
            Finalizar pagamento
          </Button>
          <Button
            background="secundary"
            title="Clique aqui para voltar para a edição de endereço"
            type="button"
          >
            Voltar para a edição de endereço
          </Button>
        </>

        {/* Finalização do pedido */}
        <>
          <h3>Pedido realizado - ORDER_ID </h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.{' '}
          </p>
          <br />
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <br />
          <p className="margin-bottom">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          //se a pesooa clicar no overlay?
          <Button
            background="secundary"
            title="Clique aqui para voltar para a home"
            type="button"
            onClick={finishPurchase}
          >
            Concluir
          </Button>
        </>
      </FormContainer>
    </Aside>
  )
}

export default Form
