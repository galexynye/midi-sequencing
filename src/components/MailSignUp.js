import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'

const MailChimp = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;
  h4 {
    margin-top: 0px;
    /* text-align: center; */
  }
  input[type='submit'] {
    margin: 0px;
    font-family: 'Montserrat', 'sans-serif';
    &:hover {
      cursor: pointer;
    }
  }
  form {
    margin: 0px;
    display: flex;
    /* flex-flow: wrap; */
  }
`

export default class MailSignUP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: '',
      email: '',
    }
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChange(e) {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit(e) {
    e.preventDefault()
    console.log('submit', this.state)
    addToMailchimp(this.state.email, { name: this.state.name })
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)
        if (result !== 'success') {
          throw msg
        }
        alert(msg)
        this.setState({
          email: '',
        })
      })
      .catch(err => {
        console.log('err', err)
        alert(err)
      })
  }

  render() {
    return (
      <MailChimp>
        <h4 style={{ margin: '10px 0px' }}>Mailing List :)</h4>
        <form onSubmit={this._handleSubmit}>
          <input
            type="email"
            onChange={this._handleChange}
            placeholder="email"
            name="email"
          />
          <input style={{ width: '60px' }} type="submit" value="Sub!" />
        </form>
      </MailChimp>
    )
  }
}
