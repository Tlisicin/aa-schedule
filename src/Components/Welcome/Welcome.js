import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {

    return(
        <div className="welcome__wrapper">
            
            <Link className="btn btn-super" to={`/new/`}>+ Добавить группу</Link>
           
        </div>
    );

}

export default Welcome;
