import styled from "styled-components"

const StyledCardGrid = styled.div`
  margin: 2rem auto;
  max-width: 1300px;

  a {
    color: inherit;
    text-decoration: none;
  }

  .card-grid {
    display: grid;
    grid-gap: 4rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  @media (max-width: 600px) {
    .card-grid {
      grid-template-columns: 1fr;
    }
  }
`

export default StyledCardGrid
