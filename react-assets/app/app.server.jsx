import React from 'react'
import { renderReact } from 'hypernova-react'
import { StaticRouter } from 'react-router-dom'
import Main from 'app/containers/Main'

const context = {}

const App = () => (
  <StaticRouter context={context} location="/">
    <Main />
  </StaticRouter>
)

export { App }

