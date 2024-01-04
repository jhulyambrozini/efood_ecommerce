import type { Preview } from '@storybook/react'
import GlobalStyle, { colors } from '../src/styles'
import { ComponentType } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'

import { store, persistor } from '../src/store'
import { PersistGate } from 'redux-persist/integration/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: colors.secundary
        },
        {
          name: 'light',
          value: colors.primaryLight
        },
        {
          name: 'dark',
          value: colors.primaryDark
        }
      ]
    }
  },
  decorators: [
    (Story: ComponentType) => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <GlobalStyle />
            <Story />
          </Router>
        </PersistGate>
      </Provider>
    )
  ]
}

export default preview
