import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions, render } from '@testing-library/react'
import { PropsWithChildren, ReactElement } from 'react'
import { RootState, AppStore, configStore } from '../store'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProvider(
  element: ReactElement,
  {
    preloadedState = {},
    store = configStore(preloadedState),
    ...moreOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(element, {
      wrapper: Wrapper,
      ...moreOptions
    })
  }
}
