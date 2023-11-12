import logo from './logo.svg';
import './App.css';
import React from 'react';
import GroupList from './Components/GroupList/GroupList.js';
import GroupItem from './Components/GroupItem/GroupItem.js';

function App() {

  return (
    <div className="App">
      <GroupList>
        <GroupItem />
      </GroupList>

    </div>
  );
}

export default App;
