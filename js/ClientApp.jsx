const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory } = require('react-router')

const Landing = require('./Landing')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
