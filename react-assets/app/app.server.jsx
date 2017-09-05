import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Main from 'app/containers/Main'

const context = {}

const App = ({location}) => (
  <StaticRouter context={context} location={location}>
    <Main />
  </StaticRouter>
)

export { App }

