import React from 'react';
import ReactDOM from 'react-dom';
import{createServer} from 'miragejs'

import {App} from './App';

createServer({
  routes()
  {
    this.namespace = 'api';

    this.get('/transacoes', ()=>{
      return[
        {
          id: 1,
          title: 'transacao 1',
          type: 'deposit',
          category: 'Food',
          

        }
      ]
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

