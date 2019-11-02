import styled from "styled-components"

const Divider = styled.div`
  border: 4px solid var(--brand);
  margin: 2rem 0;

  @media (max-width: 600px) {
    border: 3px solid var(--brand);
  }
`

export default Divider
