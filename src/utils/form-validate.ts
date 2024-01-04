import { FormikProps } from 'formik'

type Field =
  | 'adress'
  | 'cardCode'
  | 'cardName'
  | 'cardNumber'
  | 'city'
  | 'expiresMonth'
  | 'expiresYear'
  | 'name'
  | 'number'
  | 'zipCode'

const getFieldStatus = (field: Field, form: FormikProps<FormValues>) => {
  const isTouched = field in form.touched
  const isInvalid = field in form.errors

  return isTouched && isInvalid
}

export const getErrorMessage = (
  field: Field,
  form: FormikProps<FormValues>
): string => {
  const hasError = getFieldStatus(field, form)

  const errorMessage = form.errors[field]

  if (hasError && errorMessage) return errorMessage
  return ''
}
