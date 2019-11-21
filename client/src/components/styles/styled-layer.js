import styled from "styled-components"
import { Layer } from "grommet"

const StyledLayer = styled(Layer)`
  width: 50vw;
  margin: 0 auto;
  padding: var(--space-md);
  color: var(--black);
  border-radius: var(--radius);

  @media (max-width: 1024px) {
    width: 100vw;
  }
`

export default StyledLayer
