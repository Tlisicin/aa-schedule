import React from 'react';

const Notification = ({ isValid, selectedGroup }) => {

    return (
      <>
        {isValid === 1 && <div className="notification success">
            {selectedGroup ? 'Группа сохранена 👌' : 'Группа добавлена 🥳'} </div>}
        {isValid === 0 && <div className="notification error"><div>
            <strong>Заполните поля 👾</strong>
            <div>* Название группы</div>
            <div>* Широта, Долгота</div>
            <div>* Адрес</div>
            <div>* Расписание</div>
        </div></div>}
      </>
    );
  };
  
  export default Notification;