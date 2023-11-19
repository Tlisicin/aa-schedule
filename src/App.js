import './App.css';
import React, { useContext, useEffect } from 'react';
import { Context } from './Components/Context/Context.js';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import GroupItem from './Components/GroupItem/GroupItem.js';
import NewGroup from './Components/NewGroup/NewGroup.js';
import GroupList from './Components/GroupList/GroupList.js';
import Welcome from './Components/Welcome/Welcome.js';

function App() {
  const { loc, setLoc } = useContext(Context);
  const location = useLocation();

  useEffect(()=> {
    setLoc(location.pathname);
  }, [location, setLoc])

  return (
    
      <div className="App">
        <header>
          <Link to={'/'}>AА СЗО | Group Schedule</Link>
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
            <Route exact path="/new/" element={<NewGroup />} />
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
