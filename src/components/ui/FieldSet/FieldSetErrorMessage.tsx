type FieldSetErrorMessageProps = {
  errorMessage: string
}

export const FieldSetErrorMessage = ({
  errorMessage
}: FieldSetErrorMessageProps) => {
  return <span>{errorMessage}</span>
}
