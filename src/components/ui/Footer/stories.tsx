import type { Meta } from '@storybook/react'

import Footer from '.'

const meta = {
  title: 'ui/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Footer>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = () => {
  return <Footer />
}
