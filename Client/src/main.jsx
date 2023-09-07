import React from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

import './main.scss'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
const root =  ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
)