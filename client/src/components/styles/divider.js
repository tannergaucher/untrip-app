import styled from "styled-components"

const Divider = styled.div`
  border: 6px solid var(--brand);
  background: black;
  margin: 2rem 0;

  @media (max-width: 600px) {
    border: 3px solid var(--brand);
  }
`

export default Divider
