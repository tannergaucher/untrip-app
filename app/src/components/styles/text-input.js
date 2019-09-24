import React from "react"
import styled from "styled-components"
import { space } from "styled-system"
import { TextInput as GrommetTextInput } from "grommet"

const StyledTextInput = styled(GrommetTextInput)`
  ${space};
`

const TextInput = props => <StyledTextInput {...props} />

export default TextInput
