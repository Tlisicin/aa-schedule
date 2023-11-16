import './App.css';
import React, { createContext, useContext } from 'react';
import { Router, Link, Route, useParams, Switch } from 'react-router-dom';
import GroupItem from './Components/GroupItem/GroupItem.js';
import GroupList from './Components/GroupList/GroupList.js';

const GroupContext = createContext(null);

function App() {


  return (

    <GroupContext.Provider>

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
    </GroupContext.Provider>
  );

}

export default App;
