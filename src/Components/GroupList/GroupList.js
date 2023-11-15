
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('https://js-code.ru/aasch_get.php');
        setGroups(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div>
      <h2>Group List</h2>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <span>{group.id}</span>
            <span>{group.gname}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;