import './App.css';
import React, { useEffect, useState } from 'react';
import GroupItem from './Components/GroupItem/GroupItem.js';
import GroupList from './Components/GroupList/GroupList.js';

function App() {

  return (
    <div className="App">
      <header><div>AА СЗО | Group Schedule</div></header>
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
