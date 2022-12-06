import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

// import { updateLoggedInUser } from './slices/user' do NOT uncomment - tests will not work

// eslint-disable-next-line no-unused-vars
export async function useCacheUser() {
  const dispatch = useDispatch()

  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  if (isAuthenticated) {
    try {
      const token = await getAccessTokenSilently()
      const userToSave = {
        auth0Id: user?.sub,
        token: token,
      }

      dispatch(updateLoggedInUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}

export function getIsAuthenticated(useAuth0) {
  return useAuth0().isAuthenticated
}
