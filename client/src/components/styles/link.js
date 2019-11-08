import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: ${props => (props.plain ? "none" : "")};
`

export default StyledLink
