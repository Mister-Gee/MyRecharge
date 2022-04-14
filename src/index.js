import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuProvider from 'react-flexible-sliding-menu';
import MobileSideNav from './Pages/Components/MobileSideNav';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <MenuProvider MenuComponent={MobileSideNav} width="320px">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MenuProvider>
  </Router>,
  document.getElementById('root')
);