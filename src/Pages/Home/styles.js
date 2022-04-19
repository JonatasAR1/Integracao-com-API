import styled from 'styled-components'

export const Container = styled.div `
  max-width: 1280px;
  margin: 0 auto;
  
  h1 {
    margin: 4rem 0;
    text-align: center;
  }
`
export const MovieList = styled.ul `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
`;

export const Movie = styled.li `
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    margin-top: 1rem;
    font-weight: 500;
  }

  img {
    width: 250px;
    height: auto;
    border-radius: 6px;
  }

  a {
    transition: all 0.4s;

    &:hover {
      transform: scale(1.05);
      filter: brightness(0.8);
    }
  }
`;