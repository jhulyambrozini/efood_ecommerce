import { BeatLoader } from 'react-spinners'

import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => (
  <Container>
    <BeatLoader color={colors.primaryDark} />
  </Container>
)

export default Loader
