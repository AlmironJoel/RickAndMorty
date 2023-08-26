import React from 'react'
import ReactDOM, { render } from 'react-dom'
import './main.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
const root =  ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
)