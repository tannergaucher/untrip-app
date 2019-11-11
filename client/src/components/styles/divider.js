import styled from "styled-components"

const Divider = styled.div`
  border: 6px solid
    ${props => (props.bgLight ? "var(--black)" : "var(--white)")};
  background: ${props => (props.bgLight ? "var(--black)" : "var(--white)")};
  margin: 2rem 0;
  width: fill-available;

  @media (max-width: 600px) {
    margin: 1.5rem 0 0.5rem 0;
  }
`

export default Divider
