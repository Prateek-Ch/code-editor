import React from 'react';
import {withRouter} from 'react-router';
import Header from './components/Header'
import Editors from './components/Editors'

function App() {
  return (
  <div>
    <Header />
    <Editors />    
  </div>        
)}

export default withRouter(App);
