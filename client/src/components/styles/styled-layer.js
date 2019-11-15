import styled from "styled-components"
import { Layer } from "grommet"

const StyledLayer = styled(Layer)`
  width: 50vw;
  margin: 0 auto;
  padding: 1rem;
  color: var(--black);
  border-radius: var(--radius);

  @media (max-width: 900px) {
    width: 100vw;
  }
`

export default StyledLayer
