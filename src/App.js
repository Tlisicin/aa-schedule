import './App.css';
import React, { useEffect, useState } from 'react';
import GroupList from './Components/GroupList/GroupList.js';

function App() {
  const urlSave = `http://js-code.ru/aasch_save.php`;

  const saveData = () => {
    const id = document.querySelector('input.gid').value;
    const name = document.querySelector('input.gname').value;

    fetch(urlSave, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name })
    })
    .then(
      //alert(JSON.stringify({ id, name }))
    
    )
      .then(response => response.json())
      .then(response => {
        alert(response); // Assuming you want to log the response
        // Clear the input fields or perform any other necessary actions
      })
      .catch(error => {
       alert("Error: " + error);
        // Handle the error
      });
  };

  return (
    <div>
      <div className="App">
        <GroupList />
      </div>

      <div>
        <form className="saveForm" action={urlSave} method="post">
          <div>
            <label>id</label>
            <input type="text" name="gid" className="input gid" />
          </div><div>
            <label>Название</label>
            <input type="text" name="gname" className="input gname" />
          </div><div>
            <label>Широта</label>
            <input type="text" className="input glat" />
          </div><div>
            <label>Долгота</label>
            <input type="text" className="input glong" />
          </div><div>
            <label>Регион</label>
            <input type="text" className="input gregion" />
          </div><div>
            <label>Город</label>
            <input type="text" className="input gtown" />
          </div><div>
            <label>Адрес</label>
            <input type="text" className="input gaddress" />
          </div><div>
            <label>Метро</label>
            <input type="text" className="input gmetro" />
          </div><div>
            <label>Телефон</label>
            <input type="text" className="input gtel1" />
          </div><div>
            <label>Телефон 2</label>
            <input type="text" className="input gtel2" />
          </div><div>
            <label>Имя</label>
            <input type="text" className="input gname1" />
          </div><div>
            <label>Имя 2</label>
            <input type="text" className="input gname2" />
          </div><div>
            <label>Мыло</label>
            <input type="text" className="input gemail" />
          </div><div>
            <label>Предупреждение</label>
            <input type="text" className="input gwarning" />
          </div><div>
            <label>Описание</label>
            <input type="text" className="input gdescr" />
          </div><div>
            <label>Тип группы</label>
            <input type="text" className="input gtype" />
          </div><div>
            <label>Мед учреждение?</label>
            <input type="text" className="input gmed" />
          </div><div>
            <label>Закрыто</label>
            <input type="text" className="input gclosed" />
          </div>
          <button type="submit" className="save" onClick={saveData} >Save</button>
          </form>

       
      </div>

     
    </div>
  );
}

export default App;
