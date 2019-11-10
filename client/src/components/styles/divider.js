import styled from "styled-components"

const Divider = styled.div`
  border: 6px solid var(--brand);
  background: black;
  margin: 2rem 0;

  @media (max-width: 600px) {
    margin: 1.5rem 0 0.5rem 0;
  }
`

export default Divider
