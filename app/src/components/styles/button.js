import styled from "styled-components"

const StyledButton = styled.button`
  background: ${props => (props.primary ? "var(--brand)" : "white")};
  color: ${props => (props.primary ? "white" : "var(--brand)")};
  padding: 0.5rem 1rem;
  font-family: var(--sans);
  font-size: calc(var(--font-size) - 5px);
  border: var(--thickness) solid var(--brand);
  border-radius: var(--radius);
  text-transform: uppercase;

  &:hover {
    background: ${props => (props.primary ? "white" : "var(--brand)")};
    color: ${props => (props.primary ? "var(--brand)" : "white")};
    border: ${props =>
      props.primary ? "1px solid var(--brand)" : "1px solid white"};
  }
`

export default StyledButton
