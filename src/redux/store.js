import { createStore,applyMiddleware,compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Esta linea nos sirve para  conectar nuestra App con la extension REDUX DEVTOOLS DEL NAVEGADOR


const store = createStore(reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))//Esta linea sirve para que podamos pedir peticiones a una API/servidor
    );

export default store;