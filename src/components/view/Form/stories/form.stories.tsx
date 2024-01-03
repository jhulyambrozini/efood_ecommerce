import type { Meta } from '@storybook/react'

import Form from '../FormContainer'

const meta = {
  title: 'view/Form',
  component: Form,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Meta<typeof Form>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = () => {
  return <Form />
}
