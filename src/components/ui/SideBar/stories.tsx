import type { Meta } from '@storybook/react'

import SideBar from '.'

const meta = {
  title: 'ui/SideBar',
  component: SideBar,
  parameters: {}
} satisfies Meta<typeof SideBar>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = () => {
  return <SideBar />
}
