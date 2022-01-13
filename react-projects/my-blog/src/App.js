import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import './App.css';
import NavBar from './pages/NavBar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id='page-body'>
          <BrowserRouter >
          <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles-list" element={<ArticlesList />} />
              <Route path="/article/:name" element={<ArticlePage />} />
            </Routes>
          </BrowserRouter >
        </div>
      </div>

    );
  }
}

export default App;
