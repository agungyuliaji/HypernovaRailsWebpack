import React from 'react'
import { renderReact } from 'hypernova-react'
import { BrowserRouter } from 'react-router-dom'
import Main from 'app/containers/Main'

const context = {}

const App = () => (
  <BrowserRouter context={context} location="/">
    <Main />
  </BrowserRouter>
)

export default renderReact('Main', App);
