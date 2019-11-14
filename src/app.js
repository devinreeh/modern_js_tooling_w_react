import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World (from the web-server)!!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          Inc
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          Dec
        </button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

const hotModule = hot(module)
export default hotModule(App)
