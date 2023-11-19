import './App.css';
import React, { useContext, useEffect } from 'react';
import { Context } from './Components/Context/Context.js';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import GroupItem from './Components/GroupItem/GroupItem.js';
import GroupList from './Components/GroupList/GroupList.js';
import Welcome from './Components/Welcome/Welcome.js';

function App() {
  const { loc, setLoc } = useContext(Context);
  //setPath(window.location.pathname);

  const location = useLocation();

  //setLoc(loc);
  useEffect(()=> {
    setLoc(location.pathname);
  }, [location, setLoc])

  return (
    
    
      <div className="App">
        <header><div>AА СЗО | Group Schedule</div>
          <h4 className="topHeading">{loc}</h4>
          <div className="flex flex-end">
            <a className="mr-12  btn btn-lil" href="https://aaspb.ru/raspisanie-new" target="_blank" rel="noreferrer">На сайт</a>
            <Routes>
              <Route path="/edit/:groupid" element={<Link to={'/new/'} className="btn btn-lil">+ Добавить</Link>} />
            </Routes>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="*" element={<Welcome />} />
            <Route path="/edit/:groupid" element={<GroupItem />} />
          </Routes>
          <GroupList />
        </main>
        <footer>
          <div className="copyright">&copy; Lisicin 2023 | <a href="https://github.com/tlisicins" target="_blank" rel="noreferrer">Github</a></div>
        </footer>
      </div>

  );

}

export default App;
