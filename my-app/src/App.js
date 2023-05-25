import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes, Navigate, redirect } from 'react-router-dom';
import Home from './components/HomePage'
import HTMLdisplay from './components/HTMLdisplay'
import Footer from './components/Footer';
import Css from './components/CSS';
import JavaScript from './components/JavaScript';
import JavaScriptDom from './components/JavaScriptDom';
import Reactt from './components/React'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/HTML' element={<HTMLdisplay/>}/>
        <Route path='/CSS' element={<Css/>}/>
        <Route path='/JavaScript' element={<JavaScript/>}/>
        <Route path='/JavaScriptDom' element={<JavaScriptDom/>}/>
        <Route path='/React' element={<Reactt/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
