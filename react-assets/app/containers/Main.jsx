import React from 'react'
import { Link, Route } from 'react-router-dom'

const context = {}

const Main = () => (
  <div>
    <ul>
      <li><Link to="/">Ho!!!</Link></li>
      <li><Link to="/home/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>

    <ClickMe name="hello!" />

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/home/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
)

const ClickMe = ({name}) => {
  const sayHi = (event) => {
    alert(`Hi ${name}`)
  }

  return (
    <button onClick={sayHi}>Click Me!</button>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Main