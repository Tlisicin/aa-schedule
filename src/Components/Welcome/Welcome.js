import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';


const Welcome = () => {

    return (
        <div className="welcome__wrapper">
            <Routes>
                <Route exact path="/" element={<Link className="btn btn-super" to={`/new/`}>+ Добавить группу</Link>} />
            </Routes>
        </div>
    );

}

export default Welcome;
