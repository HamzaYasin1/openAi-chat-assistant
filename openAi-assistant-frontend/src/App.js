import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from './chat'; 
import Admin from './admin'; 
import Ask from './ask';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Chat />}></Route>
          <Route path='/ask' element={<Ask />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;