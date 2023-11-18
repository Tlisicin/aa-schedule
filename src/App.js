import './App.css';
import React from 'react';
import { ContextProvider } from './Components/Context/Context.js';
import { Routes, Router, Link, Route, useParams } from 'react-router-dom';
import GroupItem from './Components/GroupItem/GroupItem.js';
import GroupList from './Components/GroupList/GroupList.js';

function App() {
  
  return (
    <ContextProvider>

      <div className="App">
        <header><div>AА СЗО | Group Schedule</div>
          <div className="flex flex-end">
            <a className="mr-12  btn btn-lil" href="https://aaspb.ru/raspisanie-new" target="_blank" rel="norefferer">На сайт</a>
            <button className="btn btn-lil">+ Добавить</button>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="*" element={<GroupItem />} />
            {/* <Route exact path="/edit/:groupid" element={} /> */}
          </Routes>
          <GroupList />
        </main>
        <footer>
          <div>&copy; Lisicin 2023</div>
        </footer>
      </div>

      </ContextProvider>
  );

}

export default App;
