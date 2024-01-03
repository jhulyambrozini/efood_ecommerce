import { FormikProps } from 'formik'

export const getMessageError = (
  field: string,
  form: FormikProps<FormValues>,
  message?: string
) => {
  const isTouched = field in form.touched
  const isInvalid = field in form.errors

  if (isTouched && isInvalid && message) return message
  return ''
}
