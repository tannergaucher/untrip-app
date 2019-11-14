import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: ${props => (props.primary ? "var(--black)" : "var(--white)")};
  color: ${props => (props.primary ? "var(--white)" : "var(--black)")};
  padding: 0.5rem 1rem;
  font-family: var(--sans);
  font-weight: bolder;
  font-size: calc(var(--font-size) - 4px);
  border: ${props =>
    props.plain
      ? "var(--thickness) solid var(--white)"
      : "var(--thickness) solid var(--black)"};
  border-radius: var(--radius);
  text-transform: uppercase;
  opacity: ${props => (props.loading ? ".5" : "1")};
  transition-duration: var(--duration);

  @media (max-width: 600px) {
    width: ${props => (props.fillMobile ? "100%" : "")};
  }
`

const LinkButton = styled.a`
  text-decoration: none;
  /* DRY this. Everything below same as regular button. */
  cursor: pointer;
  background: ${props => (props.primary ? "var(--black)" : "var(--white)")};
  color: ${props => (props.primary ? "var(--white)" : "var(--black)")};
  padding: 0.5rem 1rem;
  font-family: var(--sans);
  font-weight: bolder;
  font-size: calc(var(--font-size) - 4px);
  border: ${props =>
    props.plain
      ? "var(--thickness) solid var(--white)"
      : "var(--thickness) solid var(--black)"};
  border-radius: var(--radius);
  text-transform: uppercase;
  transition-duration: var(--duration);

  @media (max-width: 600px) {
    width: ${props => (props.fillMobile ? "100%" : "")};
  }
`

export default Button

export { LinkButton }
