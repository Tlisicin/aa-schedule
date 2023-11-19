import './App.css';
import React, { useContext } from 'react';
import { Context } from './Components/Context/Context.js';
import { Routes, Route } from 'react-router-dom';
import GroupItem from './Components/GroupItem/GroupItem.js';
import GroupList from './Components/GroupList/GroupList.js';
import Welcome from './Components/Welcome/Welcome.js';

function App() {
  const { loc, setLoc } = useContext(Context);

  return (
    
    
      <div className="App">
        <header><div>AА СЗО | Group Schedule</div>
          <h1>{loc}</h1>
          <div className="flex flex-end">
            <a className="mr-12  btn btn-lil" href="https://aaspb.ru/raspisanie-new" target="_blank" rel="noreferrer">На сайт</a>
            <button className="btn btn-lil">+ Добавить</button>
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
