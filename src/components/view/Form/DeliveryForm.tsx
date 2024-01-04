import { MouseEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FormikProps } from 'formik'

import Button from '../../ui/Button'
import { FieldSet } from '../../ui/FieldSet'

import { FormControls } from './styles'
import { getMessageError } from '../../../utils/form-validate'

import { changeComponent } from '../../../store/reducers/sideBar'
import { closeFormDelivery } from '../../../store/reducers/formDelivery'

type DeliveryFormProps = {
  form: FormikProps<FormValues>
}

const DeliveryForm = ({ form }: DeliveryFormProps) => {
  const dispatch = useDispatch()
  const [inputsVoidsMessage, setInputsVoidsMessage] = useState(false)

  const handlePayment: MouseEventHandler<HTMLButtonElement> = (event) => {
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
      dispatch(closeFormDelivery())
    }
  }

  return (
    <div aria-label="Formulário de entrega">
      <div className="margin-bottom">
        <h3>Entrega</h3>

        <FieldSet.Root>
          <FieldSet.Label label="Quem irá receber*" id="name" />
          <FieldSet.Input
            id="name"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.name}
            type="text"
            required="true"
          />
          <FieldSet.ErrorMessage
            errorMessage={getMessageError('name', form, form.errors.name)}
          />
        </FieldSet.Root>

        <FieldSet.Root>
          <FieldSet.Label label="Endereço*" id="adress" />
          <FieldSet.Input
            id="adress"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.adress}
            type="text"
            required="true"
          />
          <FieldSet.ErrorMessage
            errorMessage={getMessageError('adress', form, form.errors.adress)}
          />
        </FieldSet.Root>

        <FieldSet.Root>
          <FieldSet.Label id="city" label="Cidade*" />
          <FieldSet.Input
            id="city"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.city}
            type="text"
            required="true"
          />
          <FieldSet.ErrorMessage
            errorMessage={getMessageError('city', form, form.errors.city)}
          />
        </FieldSet.Root>

        <div className="flex">
          <FieldSet.Root maxWidth="9.68rem">
            <FieldSet.Label id="zipCode" label="CPF*" />
            <FieldSet.InputMask
              id="zipCode"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.zipCode}
              mask="999.999.999-99"
              type="text"
              required="true"
            />
            <FieldSet.ErrorMessage
              errorMessage={getMessageError(
                'zipCode',
                form,
                form.errors.zipCode
              )}
            />
          </FieldSet.Root>

          <FieldSet.Root maxWidth="9.68rem">
            <FieldSet.Label id="number" label="Número*" />
            <FieldSet.Input
              id="number"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.number}
              type="number"
              required="true"
            />
            <FieldSet.ErrorMessage
              errorMessage={getMessageError('number', form, form.errors.number)}
            />
          </FieldSet.Root>
        </div>

        <FieldSet.Root>
          <FieldSet.Label label="Complemento (opicional)" id="complement" />
          <FieldSet.Input
            id="complement"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.complement}
            type="text"
            required="false"
          />
          <FieldSet.ErrorMessage
            errorMessage={getMessageError(
              'complement',
              form,
              form.errors.complement
            )}
          />
        </FieldSet.Root>
      </div>

      <FormControls>
        <Button
          background="secundary"
          title="Continuar com o pagamento"
          label="Continuar com o pagamento"
          type="button"
          onClick={(event) => handlePayment(event)}
        />
        <Button
          background="secundary"
          title="Voltar ao carrinho"
          label="Voltar ao carrinho"
          type="button"
          onClick={(e) => {
            e.preventDefault()
            dispatch(changeComponent('cart'))
          }}
        />
      </FormControls>

      {inputsVoidsMessage && (
        <p style={{ textAlign: 'center' }}>Preencha os campos obrigatórios!</p>
      )}
    </div>
  )
}

export default DeliveryForm
