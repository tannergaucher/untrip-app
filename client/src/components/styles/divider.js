import styled from "styled-components"

const Divider = styled.div`
  border: 6px solid ${props => (props.bgDark ? "var(--white)" : "var(--black)")};
  background: ${props => (props.bgDark ? "var(--white)" : "var(--black)")};
  margin: 2rem 0;
  width: fill-available;

  @media (max-width: 600px) {
    margin: 1.5rem 0 0.5rem 0;
    border: 3px solid
      ${props => (props.bgDark ? "var(--white)" : "var(--black)")};
  }
`

export default Divider
