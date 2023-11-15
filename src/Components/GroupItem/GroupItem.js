import React, { useEffect, useState } from 'react';
import axios from "axios";

const GroupItemForm = () => {

    const urlSave = `http://js-code.ru/aasch_save.php`;

    const [id, setId] = useState("");
    const [gname, setGname] = useState("");
    const [lat, setLat] = useState("");
    const [longa, setLong] = useState("");
    const [region, setRegion] = useState("");
    const [town, setTown] = useState("");
    const [gaddress, setAddress] = useState("");
    const [metro, setMetro] = useState("");
    const [tel1, setTel1] = useState("");
    const [tel2, setTel2] = useState("");
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [email, setEmail] = useState("");
    const [gdescr, setDescr] = useState("");
    const [warn, setWarn] = useState("");
    const [gtype, setType] = useState("");
    const [med, setMed] = useState("");
    const [gclosed, setGclosed] = useState("");

    const [times, setTimes] = useState([]);

    const transformTime = (inputName, value) => {
        setTimes(prevTimes => ({
            ...prevTimes, [inputName]: value.split(',').map((time, index) => (
                <div key={index}>{time.trim()}</div>
            ))
        }));
    }

    const timeChange = (e) => {
        const { name, value } = e.target;
        transformTime(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(urlSave, {id, gname, lat, longa, region, town, gaddress, metro, tel1, tel2, name1, name2, email, gdescr, warn, gtype, med, gclosed});
            alert(response.data);
            console.log(
                id + " " + gname + " " + lat + " " + longa + " " + region + " " + town + " " + gaddress + " " + metro + " " + tel1 + " " + tel2 + " " + name1 + " " + name2 + " " + email + " " + gdescr + " " + warn + " " + gtype + " " + med + " " + gclosed
            )
        } catch (error) {
            alert(error);
            console.log(error)
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="group__item">

                <div className="group__form">

                    <h2 className="pageHeader">«{gname}»</h2>

                    <div>
                        <label>ID</label>
                        <input
                            type="text"
                            className="input gid"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
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
                    <div className="flex flex-2">
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
                                value={longa}
                                onChange={(e) => setLong(e.target.value)}
                                placeholder="Долгота"
                            />
                        </div>
                    </div>
                    <div className="flex flex-2">
                        <div>
                            <label>Регион</label>
                            <select
                                className="select gregion"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}>
                                <option value="СПб">СПб</option>
                                <option value="Л.О.">Л.О.</option>
                                <option value="СЗО">СЗО</option>
                            </select>
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
                    </div>
                    <div>
                        <label>Адрес</label>
                        <input
                            type="text"
                            className="input gaddress"
                            value={gaddress}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Адрес"
                        />
                    </div>
                    <div>
                        <label>Метро, через запятую</label>
                        <input
                            type="text"
                            className="input gmetro"
                            value={metro}
                            onChange={(e) => setMetro(e.target.value)}
                            placeholder="Метро"
                        />
                    </div>
                    <div className="flex flex-2">
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
                    </div>
                    <div className="flex flex-2">
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
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            className="input gemail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label>Описание</label>
                        <textarea
                            className="textarea gdescr"
                            value={gdescr}
                            onChange={(e) => setDescr(e.target.value)}
                            placeholder="Описание"
                        ></textarea>
                    </div>
                    <div>
                        <label>Предупреждение</label>
                        <input
                            type="text"
                            className="input gwarn"
                            value={warn}
                            onChange={(e) => setWarn(e.target.value)}
                            placeholder="Предупреждение"
                        />
                    </div>

                    <div className="flex flex-3">
                        <div>
                            <label>Тип группы</label>
                            <select
                                className="select gtype"
                                value={gtype}
                                onChange={(e) => setType(e.target.value)}>
                                <option value="Обычная">Обычная</option>
                                <option value="Для женщин">Для женщин</option>
                                <option value="BBSS">BBSS</option>
                            </select>
                        </div>

                        <div>
                            <label>Мед?</label>
                            <select
                                className="select gmed"
                                value={med}
                                onChange={(e) => setMed(e.target.value)}>
                                <option value="0">Нет</option>
                                <option value="1">Да</option>
                            </select>
                        </div>

                        <div>
                            <label>Закрыта?</label>
                            <select
                                className="select gclosed"
                                value={gclosed}
                                onChange={(e) => setGclosed(e.target.value)}>
                                <option value="0">Нет</option>
                                <option value="1">Да</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="mt-24 btn btn-save">Сохранить</button>

                </div>

                <div className="group__preview">

                    <div className="group__scedule-inputs">
                    <h2 className="pageHeader">Расписание</h2>
                        <label>Время через запятую</label>
                        <div className="flex dayTime"><span>ПН</span><input type="text" name="time1" onChange={timeChange} /></div>
                        <div className="flex dayTime"><span>ВТ</span><input type="text" name="time2" onChange={timeChange} /></div>
                        <div className="flex dayTime"><span>СР</span><input type="text" name="time3" onChange={timeChange} /></div>
                        <div className="flex dayTime"><span>ЧТ</span><input type="text" name="time4" onChange={timeChange} /></div>
                        <div className="flex dayTime"><span>ПТ</span><input type="text" name="time5" onChange={timeChange} /></div>
                        <div className="flex dayTime"><span>СБ</span><input type="text" name="time6" onChange={timeChange} /></div>
                        <div className="flex dayTime"><span>ВС</span><input type="text" name="time7" onChange={timeChange} /></div>
                    </div>

                    <h2 className="pageHeader">Preview</h2>
                    <div className="show-all-array">
                        <li className={ gclosed == "1" ? ("closed") : null}>
                            <div>
                                {gname !== '' ? (<span className="mapGroupNameInner">
                                    «{gname}»
                                </span>) : null }
                                {town !== '' ? (<span className="mapTown">
                                    {town}
                                </span>) : null }
                                {metro !== '' ? (<span className="mapMetro">
                                    {metro}
                                </span>) : null }
                                {gaddress !== '' ? (<span className="mapAdress">
                                    {gaddress}
                                </span>) : null }
                                {med == '1' ? (<span className="mapTypeMed">
                                    Группа в лечебном учереждении
                                </span>) : null }
                                {email !== '' ? (<a className="mapEmail" href="#">
                                    {email}
                                </a>) : null }
                                {tel1 !== '' ? (<div><a className="mapPhone" href="#">
                                    {tel1}
                                </a> {name1 !== '' ? ( <>— {name1}</>):null}</div>):null}
                                {tel2 != '' ? (<div><a className="mapPhone" href="#">
                                    {tel2}
                                </a> {name2 !== '' ? ( <>— {name2}</>):null}</div>):null}
                            </div>
                            <div>
                                <table className="mapSchedule">
                                    <tbody>
                                        <tr>
                                            <td day="ПН">
                                                {times.time1}
                                            </td>
                                            <td day="ВТ">
                                                {times.time2}
                                            </td>
                                            <td day="СР">
                                                {times.time3}
                                            </td>
                                            <td day="ЧТ">
                                                {times.time4}
                                            </td>
                                            <td day="ПТ">
                                                {times.time5}
                                            </td>
                                            <td day="СБ">
                                                {times.time6}
                                            </td>
                                            <td day="ВС">
                                                {times.time7}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {gdescr != '' ? (<span className="mapDescr">
                                    {gdescr}
                                </span>) : null }
                                {warn != '' ? (<span className="mapWarning">
                                    {warn}
                                </span>) : null }
                            </div>
                        </li>
                    </div>

                </div>

            </div>
        </form >

    );

}

export default GroupItemForm;
