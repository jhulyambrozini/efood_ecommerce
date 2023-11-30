import { BeatLoader } from 'react-spinners'

import { Container } from './styles'
import { colors } from '../../../styles'

const Loader = () => (
  <Container>
    <BeatLoader color={colors.primaryDark} data-testid="loader-svg" />
  </Container>
)

export default Loader
