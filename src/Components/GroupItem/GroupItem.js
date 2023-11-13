import React, { useEffect, useState } from 'react';
import axios from "axios";

const GroupItemForm = () => {

    const urlSave = `http://js-code.ru/aasch_save.php`;

    const [id, setId] = useState("");
    const [gname, setGname] = useState("");
    const [lat, setLat] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(urlSave, { id, gname, lat });
            alert(response.data);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="group__item">
            <form className="saveForm" onSubmit={handleSubmit}>
                <div>
                    <label>ID</label>
                    <input
                        type="text"
                        className="input gid"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="ID"
                    />
                </div>
                <div>
                    <label>Название</label>
                    <input
                        type="text"
                        className="input gname"
                        value={gname}
                        onChange={(e) => setGname(e.target.value)}
                        placeholder="Название"
                    />
                </div>
                <div>
                    <label>Широта</label>
                    <input
                        type="text"
                        className="input glat"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        placeholder="Широта"
                    />
                </div>
                
                <button type="submit" className="save">-Save-</button>
            </form>
        </div>
    );

}

export default GroupItemForm;
