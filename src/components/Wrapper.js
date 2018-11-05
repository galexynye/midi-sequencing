import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  /*TODO: Change to variable */
  padding-left: 315px;
  padding-right: 20px;
  /* box-sizing: border-box; */
  /* padding-top: calc(100vh - 97vh); */
  position: relative;
  * {
    font-family: 'Avenir';
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: #700bea;
    margin: 15px 0px;
  }

  h2 {
    color: #2c3e50;
    margin: 10px 0px;
  }

  h3 {
    margin-bottom: 10px;
    color: #2c3e50;
  }

  ol,
  ul {
    list-style-position: inside;
    padding: 0px;
  }

  img {
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 100%;
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

  @media (max-width: 900px) {
    padding: 40px 10px;
    max-width: 800px;
  }
`

export default Wrapper
