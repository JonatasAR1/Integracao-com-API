import styled from 'styled-components'

export const Container = styled.div `
  
  
  h1 {
    margin: 3rem 0;
  }

  .movie {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
      width: 300px;
      height: auto;
      border-radius: 12px;
    }

    .details { 
      max-width: 40%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      button {
        cursor: pointer;
        width: 6rem;
        padding: 0.5rem;
        border: none;
        border-radius:8px;

        color: #fff;
        background: #6654da;
        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.75);
        }
      }

      .release-date {
        opacity: 0.5;
      }
    }
  }

  
`