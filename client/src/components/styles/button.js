import styled from "styled-components"

// TODO: Dry this?

const Button = styled.button`
  cursor: pointer;
  background: ${props => (props.primary ? "var(--brand)" : "white")};
  color: ${props => (props.primary ? "white" : "var(--brand)")};
  padding: 0.5rem 1rem;
  font-family: var(--sans);
  font-weight: bolder;
  font-size: calc(var(--font-size) - 4px);
  border: ${props =>
    props.plain
      ? "var(--thickness) solid white"
      : "var(--thickness) solid var(--brand)"};
  border-radius: var(--radius);
  text-transform: uppercase;

  /* &:hover {
    background: ${props => (props.primary ? "white" : "var(--brand)")};
    color: ${props => (props.primary ? "var(--brand)" : "")};
    border: ${props =>
      props.primary
        ? "var(--thickness) solid var(--brand)"
        : "var(--thickness) solid white"};
  } */

  @media (max-width: 600px) {
    width: ${props => (props.fillMobile ? "100%" : "")};
  }
`

const LinkButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  background: ${props => (props.primary ? "var(--brand)" : "white")};
  color: ${props => (props.primary ? "white" : "var(--brand)")};
  padding: 0.5rem 1rem;
  font-family: var(--sans);
  font-weight: bolder;
  font-size: calc(var(--font-size) - 4px);
  border: ${props =>
    props.plain
      ? "var(--thickness) solid white"
      : "var(--thickness) solid var(--brand)"};
  border-radius: var(--radius);
  text-transform: uppercase;

  /* &:hover {
    background: ${props => (props.primary ? "white" : "var(--brand)")};
    color: ${props => (props.primary ? "var(--brand)" : "white")};
    border: ${props =>
      props.primary
        ? "var(--thickness) solid var(--brand)"
        : "var(--thickness) solid white"};
  } */

  @media (max-width: 600px) {
    width: ${props => (props.fillMobile ? "100%" : "")};
  }
`

export default Button

export { LinkButton }
