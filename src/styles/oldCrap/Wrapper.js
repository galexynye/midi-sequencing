import styled from 'styled-components'

// Split out into Article Wrapper and Other Wrappers

const Wrapper = styled.div`
  position: relative;
  max-width: 650px;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  /*TODO: Change to variable */
  padding-left: 240px;
  padding-right: 20px;

  ol,
  ul {
    /* list-style-position: inside; */
    /* margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem; */
  }

  img {
    margin-top: 15px;
    margin-bottom: 15px;
    max-width: 100%;
  }

  /* .hoverPointer:hover {
    cursor: pointer;
  } */

  iframe {
    margin: 15px 0px;
  }

  @media (max-width: 1500px) {
    padding-left: 290px;
  }

  @media (max-width: 900px) {
    margin-top: 45px;
    padding: 0px 15px;
    max-width: 800px;
  }
`

export default Wrapper
