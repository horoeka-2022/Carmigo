const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const { ManagementClient } = require('auth0')
const dotenv = require('dotenv')
const request = require('superagent')

dotenv.config()

// TODO: set the domain and audience (API Identifier)
const domain = 'https://dev-jkpvp28ykafjk7db.us.auth0.com'
const audience = 'https://carmigo/api'
const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

// https://auth0.github.io/node-auth0/ManagementClient.html
const managementDomain = 'dev-jkpvp28ykafjk7db.us.auth0.com' //done
const managementAudience = 'https://dev-jkpvp28ykafjk7db.us.auth0.com/api/v2/' //done
const clientId = '6bTAyrmUOIuDquMp8W7pc6tOVPafT0qf' //done
const clientSecret = process.env.AUTH0_API_SECRET || 'empty-secret'
const scope = 'read:users'

const management = new ManagementClient({
  domain: managementDomain,
  audience: managementAudience,
  clientId,
  clientSecret,
  scope,
  tokenProvider: {
    enableCache: true,
    cacheTTLInSeconds: 10,
  },
})

async function getUser(id) {
  const user = await management.getUser({ id })
  return user.user_metadata
}

async function updateUser(id, userDetails) {
  await management.updateUserMetadata(
    { id },
    { user_metadata: { ...userDetails } }
  )
  const user = await management.getUser({ id })
  return user.user_metadata
}

module.exports = {
  checkJwt,
  getUser,
  updateUser,
}
