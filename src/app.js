import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World (from the web-server)!!</h1>
      </div>
    )
  }
}

const hotModule = hot(module)
export default hotModule(App)
