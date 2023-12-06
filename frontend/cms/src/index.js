import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Quiz from './Components/Render/Quiz';
import Categorize from './Components/FormBuilder/Categorize/Categorize';
import Cloze from './Components/FormBuilder/Cloze/Cloze';
import Comprehension from './Components/FormBuilder/Comprehension/Comprehension';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/categorize' Component={Categorize} />
        <Route path='/cloze' Component={Cloze} />
        <Route path='/comprehension' Component={Comprehension} />
        <Route path='/quiz' Component={Quiz} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>

);
