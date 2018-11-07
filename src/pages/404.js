import React from 'react'
import Wrapper from '../components/Wrapper'
import Menu from '../components/Menu/Menu'

const NotFoundPage = () => (
  <Wrapper>
    <Menu sideNav={true} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Wrapper>
)

export default NotFoundPage
