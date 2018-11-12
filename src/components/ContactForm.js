import React from 'react'
import styled from 'styled-components'

const GeneralContact = styled.div`
  form {
    margin: ${props => props.margin || '0px'};
    text-align: ${props => props.textAlign || 'center'};
    input {
      box-sizing: border-box;
      font-size: 1rem;
      width: 100%;
      padding: 8px;
      text-align: ${props => props.textAlign || 'center'};
      border: none;
      border-bottom: 1px solid #737373;
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
        text-align: ${props => props.textAlign || 'center'};
      }
    }

    select {
      padding: 5px;
      border: 1px solid #737373;
      border-radius: 0px;
      margin: 20px 0px -10px 0px;
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

const ContactForm = props => {
  return (
    <GeneralContact margin={props.margin} textAlign={props.textAlign}>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p>
          {/* <label> */}
          {/* Your Name:  */}
          <input
            type="text"
            name="name"
            placeholder="Name (Required)"
            required
          />
          {/* </label> */}
        </p>
        <p>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email (Required)"
              required
            />
          </label>
        </p>
        {props.subject && (
          <p>
            <label>
              <input type="text" name="subject" placeholder="Subject" />
            </label>
          </p>
        )}
        {props.lesson && (
          <div>
            <p>
              {/* <label>
              Subject:{' '} */}
              <select name="role[]">
                <option value="schedule">Schedule Lesson(s)</option>
                {/* <option value="schedule">Schedule Free Meet and Greet</option> */}
                <option value="lesson Details">
                  Ask further details about Lessons
                </option>
                <option value="other lessons">Other</option>
              </select>
              {/* </label> */}
            </p>
            {/* <p>Date Preferences</p>
            <p>
              <input type="date" placeholder="Date" />
            </p>
            <p>
              <input type="date" placeholder="Date" />
            </p>
            <p>
              <input type="date" placeholder="Date" />
            </p> */}
          </div>
        )}

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
  )
}

export default ContactForm
