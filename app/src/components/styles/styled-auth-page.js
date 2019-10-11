import styled from "styled-components"

const StyledAuthPage = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-areas: "message auth";

  .welcome-message {
    grid-area: "message";
  }

  .auth {
    grid-area: "auth";
  }

  @media (max-width: 600px) {
    grid-template-areas: "auth";

    .welcome-message {
      display: none;
    }
  }
`

export default StyledAuthPage
