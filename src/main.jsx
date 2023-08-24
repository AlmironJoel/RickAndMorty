import React from 'react'
import ReactDOM, { render } from 'react-dom'
import './main.css'
import App from './App'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
const root =  ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)