import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes, Navigate, redirect } from 'react-router-dom';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Header/>
      <Display/>
    </div>
  );
}

export default App;
