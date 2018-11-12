import styled from 'styled-components'

const HomeWrapper = styled.div`
  position: relative;
  max-width: 1300px;
  margin-top: 70px;
  margin-right: auto;
  margin-left: auto;
  /*TODO: Change to variable */
  padding-left: 320px;
  padding-right: 20px;

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
    padding-left: 320px;
  }

  @media (max-width: 900px) {
    margin-top: 55px;
    padding: 0px 15px;
    max-width: 800px;
  }
`

export default HomeWrapper
