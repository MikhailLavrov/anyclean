import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import LayoutComponent from './components/Layout/Layout';
import { HeroComponent } from './components/Hero/Hero';
import { SpecialComponent } from './components/Special/Special';

const MainPage = () => {
  return (
    <div className="App" id='services'>
      <HeroComponent />
      <SpecialComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={"/abc"}>Ссылка на страницу abc</Link>
      </header>
    </div>
  );
}

const AbcPage = () => {
  return (
    <div>SDfsdfsdf</div>
  )
}

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent /> }>
        <Route index element={<MainPage />} />
        <Route path="abc" element={<AbcPage />} />
      </Route>
    </Routes>
  )
}
