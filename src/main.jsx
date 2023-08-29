import React from 'react'
import ReactDOM, { render } from 'react-dom'
import './main.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
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