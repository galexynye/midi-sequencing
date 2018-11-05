import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1170px;
  /*TODO: Change to variable */
  padding-left: 325px;
  /* box-sizing: border-box; */
  padding-top: calc(100vh - 95vh);
  position: relative;
  * {
    font-family: 'Avenir';
  }

  h1 {
    color: #700bea;
    margin: 15px 0px;
  }

  h2 {
    color: #2c3e50;
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #2c3e50;
  }

  ol,
  ul {
    list-style-position: inside;
  }

  img {
    margin-bottom: 20px;
  }

  #noUnderLine {
    text-decoration: none;
  }

  .hoverPointer:hover {
    cursor: pointer;
  }

  a {
    box-shadow: none;
    color: #700bea;
  }

  .marRSmall {
    margin-right: 10px;
  }

  .marTSmall {
    margin-top: 10px;
  }

  .marRMedium {
    margin-right: 25px;
  }

  @media (max-width: 1200px) {
    padding: 40px 10px;
    max-width: 800px;
  }
`

export default Wrapper
