import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { AuthContext } from '../context/authContext'

import SignIn from '../pages/sign-in'
import Dashboard from '../pages/dashboard'

interface IRoutesProps {
  component: any
  path: string
  exact?: boolean
}

const PrivateRoutes: React.FC<IRoutesProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <PrivateRoutes path="/dashboard" component={Dashboard} />
  </Switch>
)

export default Routes
