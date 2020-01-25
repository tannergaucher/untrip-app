import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: ${props =>
    props.primary ? "var(--primary-btn-bg)" : "var(--outline-btn-bg)"};
  color: ${props =>
    props.primary ? "var(--primary-btn-color)" : "var(--outline-btn-color)"};
  border: none;
  padding: var(--space-sm) var(--space-md);
  font-family: var(--sans);
  font-weight: bolder;
  text-transform: uppercase;
  opacity: ${props => (props.loading ? ".5" : "1")};
  transition-duration: var(--duration);
  box-shadow: ${props => (props.primary ? `var(--elevation-3)` : ``)} @media
    (max-width: 1024px) {
    width: ${props => (props.fillMobile ? "100%" : "")};
  }
`

const LinkButton = styled.a`
  text-decoration: none;
  /* TODO: DRY this. Everything below same as regular button. */
  cursor: pointer;
  background: ${props => (props.primary ? "var(--text-color)" : "var(--bg-1)")};
  color: ${props => (props.primary ? "var(--bg-1)" : "var(--text-color)")};
  padding: var(--space-sm) var(--space-md);
  font-family: var(--sans);
  font-weight: bolder;
  border: ${props =>
    props.plain
      ? "var(--thickness) solid var(--white)"
      : "var(--thickness) solid var(--text-color)"};
  border-radius: var(--radius);
  text-transform: uppercase;
  transition-duration: var(--duration);

  @media (max-width: 1024px) {
    width: ${props => (props.fillMobile ? "100%" : "")};
  }
`

export default Button

export { LinkButton }
