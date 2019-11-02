import styled from "styled-components"

const StyledButton = styled.button`
  background: ${props => (props.primary ? "var(--brand)" : "white")};
  color: ${props => (props.primary ? "white" : "var(--brand)")};
  padding: 0.5rem 1rem;
  font-family: var(--sans);
  font-weight: bolder;
  font-size: calc(var(--font-size) - 6px);
  border: ${props =>
    props.plain
      ? "var(--thickness) solid white"
      : "var(--thickness) solid var(--brand)"};
  border-radius: var(--radius);
  text-transform: uppercase;

  &:hover {
    background: ${props => (props.primary ? "white" : "var(--brand)")};
    color: ${props => (props.primary ? "var(--brand)" : "white")};
    border: ${props =>
      props.primary
        ? "var(--thickness) solid var(--brand)"
        : "var(--thickness) solid white"};
  }
`

export default StyledButton
