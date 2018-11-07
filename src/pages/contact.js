import React from 'react'
import styled from 'styled-components'
import HomeLink from '../components/HomeLinks/HomeLinkLogo'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'

const GeneralContact = styled.div`
  form {
    text-align: center;
    input {
      box-sizing: border-box;
      font-size: 1rem;
      width: 100%;
      padding: 8px;
      text-align: center;
      border: none;
      border-bottom: 1px solid black;
    }
    p {
      margin-top: 50px;
    }
    textarea {
      box-sizing: border-box;
      width: 100%;
      min-height: 100px;
      margin-top: 30px;
      padding: 8px;
      ::placeholder {
        text-align: center;
      }
    }

    button {
      margin-left: auto;
      padding: 5px 10px;
      font-size: 1rem;
      color: #777777;
      background-color: white;
      &:hover {
        cursor: pointer;
      }
    }
    @media (max-width: 900px) {
      p {
        margin-top: 20px;
      }
    }
  }
`

const Contact = () => {
  return (
    <Wrapper>
      <Menu sideNav={true} />
      <HomeLink />
      <GeneralContact>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p>
            {/* <label> */}
            {/* Your Name:  */}
            <input type="text" name="name" placeholder="Name" />
            {/* </label> */}
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="*Email" required />
            </label>
          </p>
          {/* <p>
            <label>
              Subject:{' '}
              <select name="role[]">
                <option value="leader">Lessons</option>
                <option value="follower">Product Review</option>
              </select>
            </label>
          </p> */}
          <p>
            {/* <label>
              Message */}
            <textarea name="message" placeholder="Message" />
            {/* </label> */}
          </p>
          <p>
            <button>Submit</button>
          </p>
        </form>
      </GeneralContact>
      <Footer />
    </Wrapper>
  )
}

export default Contact
