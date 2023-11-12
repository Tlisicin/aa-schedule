import './App.css';
import React, { useEffect, useState } from 'react';
import GroupList from './Components/GroupList/GroupList.js';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const url = `http://localhost:3000/?url=${encodeURIComponent('http://js-code.ru/aasch.php')}`;

  const getData = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        console.error("Error: " + error);
      });
  };

  const displayData = () => {
    return data.map(item => (
      <div key={item.id}>
        ID: {item.id}, Name: {item.name}
      </div>
    ));
  };

  const saveData = () => {
    const id = document.querySelector('.input.gid').value;
    const name = document.querySelector('.input.gname').value;
  
    fetch("http://js-code.ru/aasch.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Assuming you want to log the response
        // Clear the input fields or perform any other necessary actions
      })
      .catch(error => {
        console.error("Error: " + error);
        // Handle the error
      });
  };

  return (
    <div>
      <div className="App">
        <GroupList />
      </div>
    
      <div>
        <div>
        <label>id</label>
        <input type="text" className="input gid" />
        </div><div>
        <label>Название</label>
        <input type="text" className="input gname" />
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

        <button className="save" onClick={saveData} >Save</button>
      </div>

      <div id="result" style={{'border': 10+'px solid orange'}}>{displayData()}</div>
    </div>
  );
}

export default App;
