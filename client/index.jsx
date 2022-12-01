import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="dev-jkpvp28ykafjk7db.us.auth0.com"
      clientId="4Gh9GkpBAujG5DBxwoQAmnbskxSLHbqy"
      redirectUri={window.location.origin}
      audience="https://carmigo/api"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
