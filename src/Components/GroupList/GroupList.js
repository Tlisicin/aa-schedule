import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from './../Context/Context.js';

const GroupList = () => {

    const { selectedGroup, setSelectedGroup } = useContext(Context);

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get('http://js-code.ru/aasch_getList.php');
                setGroups(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        const timer = setTimeout(fetchGroups, 5000);
        return () => {clearTimeout(timer)}
    }, [groups]);
  
    const handleSelect = (selectedGroup) => {
        setSelectedGroup(selectedGroup);
       
        { console.log(selectedGroup + ' is Active') }
    }

    return (
        <div className="group__list">
            <h2>Список групп </h2>
            <ul className="group__list-ul">
                {groups.map((group) => (

                    <li key={group.id}>
                        <Link to={`/edit/${group.id}`} onClick={() => handleSelect(group.id)} className={`group__list-link ${selectedGroup === group.id ? 'active' : ''}`}>
                            <span className="group__list-gname">{group.gname}</span>
                            <span className="group__list-id">{group.id}</span>
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    );

};

export default GroupList;
