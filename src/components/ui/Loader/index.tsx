import { BeatLoader } from 'react-spinners'

import { LoaderContainer } from './styles'
import { colors } from '../../../styles'

const Loader = () => (
  <LoaderContainer>
    <BeatLoader color={colors.primaryDark} data-testid="loader-svg" />
  </LoaderContainer>
)

export default Loader
