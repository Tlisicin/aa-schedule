import './App.css';
import React, { useEffect, useState } from 'react';
import GroupItem from './Components/GroupItem/GroupItem.js';
import GroupList from './Components/GroupList/GroupList.js';

function App() {

  return (
    <div className="App">
      <header><div>AА СЗО | Group Schedule</div>
        <div className="flex flex-end">
          <a className="mr-12  btn btn-lil" href="https://aaspb.ru/raspisanie-new" target="_blank" rel="norefferer">На сайт</a>
          <button className="btn btn-lil">+ Добавить</button>
          </div>
      </header>
      <main>
        <GroupItem />
        <GroupList />
      </main>
      <footer>
        <div>&copy; Lisicin 2023</div>
      </footer>
    </div>
  );

}

export default App;
