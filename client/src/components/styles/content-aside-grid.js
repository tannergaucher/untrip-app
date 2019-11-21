import styled from "styled-components"

const ContentAsideGrid = styled.div`
  display: grid;
  grid-template-areas: "content aside";
  grid-template-columns: 5fr 3fr;
  grid-column-gap: var(--space-md);
  margin: var(--space-md);

  .content {
    grid-area: "content";
  }

  aside {
    grid-area: "aside";
    margin: 0 var(--space-md);
  }

  .side-section {
    margin-bottom: var(--space-xl);
  }

  .side-title {
    margin-top: 0;
    margin-bottom: var(--space-md);
    font-weight: lighter;
  }

  .sticky {
    position: sticky;
    top: var(--space-md);
  }

  .only-mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    margin: 0;
    grid-template-areas:
      "content"
      "aside";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;

    aside {
      margin: 0;
      padding: var(--space-sm);
    }

    .map-container {
      display: none;
    }

    .only-mobile {
      display: inline;
    }
  }
`

export default ContentAsideGrid
