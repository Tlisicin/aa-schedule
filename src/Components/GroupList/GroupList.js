
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('http://js-code.ru/aasch_get.php');
        setGroups(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="group__list">
      <h2>Group List</h2>
      <ul className="group__list-ul">
        {groups.map((group) => (
          <li key={group.id}>
            <span className="group__list-gname">{group.gname}</span>
            <span className="group__list-id">{group.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );

};



export default GroupList;