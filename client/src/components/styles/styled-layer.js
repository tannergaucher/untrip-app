import styled from "styled-components"
import { Layer } from "grommet"

const StyledLayer = styled(Layer)`
  width: 50vw;
  margin: 0 auto;
  padding: var(--space-md);
  color: var(--text-color);
  border-radius: var(--radius);
  background: var(--bg-1);
  border: 2px solid var(--text-color);

  @media (max-width: 1024px) {
    width: 100vw;
  }
`

export default StyledLayer
