import React from 'react'
import { navigateTo } from 'gatsby'
import styled from 'styled-components'

const GeneralContact = styled.div`
  form {
    margin: ${props => props.margin || '0px'};
    text-align: ${props => props.textAlign || 'center'};
    label{
      color: #777777;
    }
    input {
      box-sizing: border-box;
      font-size: 1rem;
      width: 100%;
      padding: 8px;
      text-align: ${props => props.textAlign || 'center'};
      border: none;
      border-bottom: 1px solid #737373;
      /* ::placeholder{
        white-space:pre-line;  
        position:relative;
      /* } */ 
      
    }
    p {
      margin-top: 50px;
    }
    textarea {
      box-sizing: border-box;
      width: 100%;
      min-height: 100px;
      /* margin-top: 30px; */
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
      font-size: .9rem;
      color: #777777;
      border-radius: 5px;
      background-color: white;
      &:hover {
        cursor: pointer;
      }
    }
    @media (max-width: 900px) {
      p {
        margin-top: 20px;
        input{
          /* min-height: 50px; */
        }
      }
    }
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  _handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <GeneralContact
        margin={this.props.margin}
        textAlign={this.props.textAlign}
      >
        <form
          name="contact"
          method="post"
          data-netlify="true"
          action="/thanks"
          data-netlify-honeypot="bot-field"
          onSubmit={this._handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this._handleChange} />
            </label>
          </p>
          <p>
            <label>
              Name*
              <input
                type="text"
                name="name"
                // placeholder="Required"
                onChange={this._handleChange}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Email*
            <input
                type="email"
                name="email"
                onChange={this._handleChange}
                // placeholder="Email (Required)"
                required
              />
            </label>
          </p>
          {this.props.subject && (
            <p>
              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  // placeholder="Subject"
                  onChange={this._handleChange}
                />
              </label>
            </p>
          )}


          {this.props.lesson && (
            <div>
              <p>
                <label>
                  How long have you been creating music?
                {/* Your Name:  */}
                  <input
                    type="text"
                    name="experience"
                    // placeholder="How long have you been creating music?"
                    onChange={this._handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  What genre(s) do you like to work in?
                <input
                    type="text"
                    name="genre"
                    // placeholder="What genre(s) do you like to work in?"
                    onChange={this._handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Do you have any date/time prefrences?
                <input
                    type="text"
                    name="dates"
                    // placeholder="What genre(s) do you like to work in?"
                    onChange={this._handleChange}
                  />
                </label>
              </p>
              {/* <p>
                <input
                  type="text"
                  name="interests"
                  placeholder="Is there any area of Music Production you would like to focus on?"
                  onChange={this._handleChange}
                />
              </p> */}
            </div>
          )}

          <p>
            <label >
              Message
            <textarea
                name="message"
                // placeholder="Message"
                style={{ marginTop: "30px" }}
                onChange={this._handleChange}
              />
            </label>
          </p>
          <p>
            <button style={{ backgroundColor: "#700bea", color: 'white' }} type="submit">Submit</button>
          </p>
        </form>
      </GeneralContact>
    )
  }
}

export default ContactForm
