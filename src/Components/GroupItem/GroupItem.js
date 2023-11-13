import React, { useEffect, useState } from 'react';
import axios from "axios";

const GroupItemForm = () => {

    const urlSave = `http://js-code.ru/aasch_save.php`;

    const [id, setId] = useState("");
    const [gname, setGname] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [region, setRegion] = useState("");
    const [town, setTown] = useState("");
    const [address, setAddress] = useState("");
    const [metro, setMetro] = useState("");
    const [tel1, setTel1] = useState("");
    const [tel2, setTel2] = useState("");
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(urlSave, { 
                 id, gname, lat, long, region, town, address, metro, tel1, tel2, name1, name2
            });
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
                <div>
                    <label>Долгота</label>
                    <input
                        type="text"
                        className="input glong"
                        value={long}
                        onChange={(e) => setLong(e.target.value)}
                        placeholder="Долгота"
                    />
                </div>
                <div>
                    <label>Регион</label>
                    <input
                        type="text"
                        className="input gregion"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder="Регион"
                    />
                </div>
                <div>
                    <label>Город</label>
                    <input
                        type="text"
                        className="input gtown"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                        placeholder="Город"
                    />
                </div>
                <div>
                    <label>Адрес</label>
                    <input
                        type="text"
                        className="input gaddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Адрес"
                    />
                </div>
                <div>
                    <label>Метро</label>
                    <input
                        type="text"
                        className="input gmetro"
                        value={metro}
                        onChange={(e) => setMetro(e.target.value)}
                        placeholder="Метро"
                    />
                </div>
                <div>
                    <label>Телефон</label>
                    <input
                        type="text"
                        className="input gtel1 gtel"
                        value={tel1}
                        onChange={(e) => setTel1(e.target.value)}
                        placeholder="+7"
                    />
                </div>
                <div>
                    <label>Имя</label>
                    <input
                        type="text"
                        className="input gname1 gname"
                        value={name1}
                        onChange={(e) => setName1(e.target.value)}
                        placeholder="Имя"
                    />
                </div>
                <div>
                    <label>Телефон 2</label>
                    <input
                        type="text"
                        className="input gtel2 gtel"
                        value={tel2}
                        onChange={(e) => setTel2(e.target.value)}
                        placeholder="+7"
                    />
                </div>
                <div>
                    <label>Имя 2</label>
                    <input
                        type="text"
                        className="input gname2 gname"
                        value={name2}
                        onChange={(e) => setName2(e.target.value)}
                        placeholder="Имя"
                    />
                </div>
                
                <button type="submit" className="save">-Save-</button>
            </form>
        </div>
    );

}

export default GroupItemForm;
