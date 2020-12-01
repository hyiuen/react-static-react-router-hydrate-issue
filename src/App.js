import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Switch, Route, Link } from 'react-router-dom'
import Dynamic from 'containers/Dynamic'
// if the page component is imported here, the issue on rehydrate doesn't happen anymore
// uncomment the line below to see
// import Home from "./pages/index"

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Switch>
            <Route path="/dynamic" component={Dynamic} />
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </div>

      {/* Add bottom line to better see the reloadin issue */}
      <div style={{ width: "100%", height: "4px", backgroundColor: "red"}} />
    </Root>
  )
}

export default App
