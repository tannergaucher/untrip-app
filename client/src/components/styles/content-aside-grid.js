import styled from "styled-components"

const ContentAsideGrid = styled.div`
  display: grid;
  grid-template-areas: "content aside";
  grid-template-columns: 5fr 3fr;
  grid-column-gap: 2rem;
  margin: 2rem 2rem;

  .content {
    grid-area: "content";
  }

  aside {
    grid-area: "aside";
    margin: 0 2rem;
  }

  .side-section {
    margin-bottom: 6rem;
  }

  .side-title {
    margin: 0;
    text-transform: uppercase;
    font-weight: 900;
  }

  .sticky {
    position: sticky;
    top: 3rem;
  }

  @media (max-width: 900px) {
    margin: 2rem 0.5rem;
    grid-template-areas:
      "content"
      "aside";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;

    aside {
      margin: 0rem;
    }

    .side-section {
      margin-bottom: 2rem;
    }

    .map-container {
      display: none;
    }
  }
`

export default ContentAsideGrid
