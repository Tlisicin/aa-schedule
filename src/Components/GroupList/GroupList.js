
import React, {  useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import GroupContext from './../../App'
 


const GroupList = () => {

    const context = useContext(GroupContext);
    // const { basename } = context;
    const { groupid } = useParams();

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get('http://js-code.ru/aasch_getList.php');
                setGroups(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGroups();
    }, []);

    return (
        <div className="group__list">
            <h2>Group List  <p>Basename: {groupid}</p></h2>
            <ul className="group__list-ul">
                {groups.map((group) => (
                    <>
                        <li key={group.id}>
                            <Link to={`/edit/${group.id}`} className="group__list-link">
                                <span className="group__list-gname">{group.gname}</span>
                                <span className="group__list-id">{group.id}</span>
                            </Link>   
                        </li>

                        {console.log(group.id)}
                    </>

                ))}
            </ul>
        </div>
    );

};

export default GroupList;