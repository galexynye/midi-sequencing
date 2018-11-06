import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'

const MailChimp = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-flow: column;
  h3 {
    margin-top: 0px;
    /* text-align: center; */
  }
  input[type='submit'] {
    margin: 0px;
    min-width: 82px;
    font-family: 'Montserrat', 'sans-serif';
    &:hover {
      cursor: pointer;
    }
  }
  form {
    margin: 0px;
    padding: 5px;
    max-width: 217px;
    display: flex;
    border: 1px solid #2c3e50;
    border-radius: 5px;
    /* flex-flow: wrap; */
  }
`

export default class MailSignUP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: '',
      email: '',
      showSubmit: false,
    }
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this._handleShowSubmit = this._handleShowSubmit.bind(this)
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
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)
        if (result !== 'success') {
          throw msg
        }
        this.setState({ email: '', showSubmit: false })
        alert(msg)
      })
      .catch(err => {
        console.log('err', err)
        alert(err)
      })
  }

  _handleShowSubmit() {
    this.setState({
      showSubmit: !this.state.showSubmit,
    })
  }

  render() {
    return (
      <MailChimp>
        <HeaderButton inputColor="#ce0a00" onClick={this._handleShowSubmit}>
          Mailing List :)
        </HeaderButton>
        {this.state.showSubmit && (
          <div>
            <p style={{ marginTop: '0px' }}>
              Enter your email below for sweet emails every once in awhile.
            </p>
            <form onSubmit={this._handleSubmit}>
              <input
                type="email"
                onChange={this._handleChange}
                placeholder="email"
                name="email"
              />
              <input style={{ width: '60px' }} type="submit" value="Subcribe" />
            </form>
          </div>
        )}
      </MailChimp>
    )
  }
}
