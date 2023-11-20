import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import Context from '../Context/Context';

const NewGroup = () => {

    const { selectedGroup, setSelectedGroup, path, setPath, loc, setLoc } = useContext(Context);

    const urlAdd = `http://js-code.ru/aasch_add.php`;

    const [gid, setGid] = useState("");
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
    const [warn2, setWarn2] = useState("");
    const [gtype, setType] = useState("");
    const [med, setMed] = useState("");
    const [gclosed, setGclosed] = useState("");

    const [gtime1, setTime1] = useState("");
    const [gtime2, setTime2] = useState("");
    const [gtime3, setTime3] = useState("");
    const [gtime4, setTime4] = useState("");
    const [gtime5, setTime5] = useState("");
    const [gtime6, setTime6] = useState("");
    const [gtime7, setTime7] = useState("");

    useEffect(() => {
        setSelectedGroup(selectedGroup);
        
        setPath(window.location.pathname);
        setLoc(loc);

        const fetchData = async () => {
            try {
                const response = await axios.get(urlAdd);
                const data = response.data;

                setGid(data.gid);
                setGname(data.gname);
                setLat(data.lat);
                setLong(data.longa);
                setRegion(data.region);
                setTown(data.town);
                setAddress(data.gaddress);
                setMetro(data.metro);
                setTel1(data.tel1);
                setTel2(data.tel2);
                setName1(data.name1);
                setName2(data.name2);
                setEmail(data.email);
                setDescr(data.gdescr);
                setWarn(data.warn);
                setWarn2(data.warn2);
                setType(data.gtype);
                setMed(data.med);
                setGclosed(data.gclosed);

                setTime1(data.gtime1);
                setTime2(data.gtime2);
                setTime3(data.gtime3);
                setTime4(data.gtime4);
                setTime5(data.gtime5);
                setTime6(data.gtime6);
                setTime7(data.gtime7);
            
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, [selectedGroup, path, loc])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(urlAdd, { gid, gname, lat, longa, region, town, gaddress, metro, tel1, tel2, name1, name2, email, gdescr, warn, warn2, gtype, med, gclosed, gtime1, gtime2, gtime3, gtime4, gtime5, gtime6, gtime7 });
            //alert(response.data);
            alert('Новая группа добавлена, Босс!')

        } catch (error) {
            alert(error);
            console.log(error)
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="group__item group__item-new">

                <div className="group__form">

                    <h2 className="pageHeader color-aa-blue">{gname}</h2>

                    {/* <div>
                        <label>ID</label>
                        <input
                            type="text"
                            className="input gid"
                            disabled
                            value={selectedGroup}
                            onChange={(e) => setSelectedGroup(e.target.value)}
                        />
                    </div> */}
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
                                <option value="">—</option>
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
                    <div>
                        <label>Предупреждение 2</label>
                        <input
                            type="text"
                            className="input gwarn gwarn2"
                            value={warn2}
                            onChange={(e) => setWarn2(e.target.value)}
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

                    <button type="submit" className="mt-24 btn btn-save">Добавить и Сохранить</button>

                </div>

                <div className="group__preview">

                    <div className="group__scedule-inputs">
                        <h2 className="pageHeader">Расписание</h2>
                        <label>Время через запятую</label>
                        <div className="flex dayTime"><span>ПН</span><input type="text" name="gtime1" value={gtime1} onChange={(e) => setTime1(e.target.value)} /></div>
                        <div className="flex dayTime"><span>ВТ</span><input type="text" name="gtime2" value={gtime2} onChange={(e) => setTime2(e.target.value)} /></div>
                        <div className="flex dayTime"><span>СР</span><input type="text" name="gtime3" value={gtime3} onChange={(e) => setTime3(e.target.value)} /></div>
                        <div className="flex dayTime"><span>ЧТ</span><input type="text" name="gtime4" value={gtime4} onChange={(e) => setTime4(e.target.value)} /></div>
                        <div className="flex dayTime"><span>ПТ</span><input type="text" name="gtime5" value={gtime5} onChange={(e) => setTime5(e.target.value)} /></div>
                        <div className="flex dayTime dayHoly"><span>СБ</span><input type="text" name="gtime6" value={gtime6} onChange={(e) => setTime6(e.target.value)} /></div>
                        <div className="flex dayTime dayHoly"><span>ВС</span><input type="text" name="gtime7" value={gtime7} onChange={(e) => setTime7(e.target.value)} /></div>
                    </div>

                    <h2 className="pageHeader  mt-44">Preview</h2>
                    <div className="show-all-array">
                        <li className={gclosed == "1" ? ("closed") : null}>
                            <div>
                                {gname !== '' ? (<span className="mapGroupNameInner">
                                    {gname}
                                </span>) : null}
                                {town !== '' ? (<span className="mapTown">
                                    {town}
                                </span>) : null}
                                {metro !== '' ? (<span className="mapMetro">
                                    {metro}
                                </span>) : null}
                                {gaddress !== '' ? (<span className="mapAdress">
                                    {gaddress}
                                </span>) : null}
                                {med == '1' ? (<span className="mapTypeMed">
                                    Группа в лечебном учереждении
                                </span>) : null}
                                {email !== '' ? (<a className="mapEmail" href={`mailto://${email}`}>
                                    {email}
                                </a>) : null}
                                {tel1 !== '' ? (<div><a className="mapPhone" href={`tel:${tel1}`}>
                                    {tel1}
                                </a> {name1 !== '' ? (<>— {name1}</>) : null}</div>) : null}
                                {tel2 !== '' ? (<div><a className="mapPhone" href={`tel:${tel2}`}>
                                    {tel2}
                                </a> {name2 !== '' ? (<>— {name2}</>) : null}</div>) : null}
                            </div>
                            <div>
                                <table className="mapSchedule">
                                    <tbody>
                                        <tr>
                                            <td day="ПН">
                                                {gtime1}
                                            </td>
                                            <td day="ВТ">
                                                {gtime2}
                                            </td>
                                            <td day="СР">
                                                {gtime3}
                                            </td>
                                            <td day="ЧТ">
                                                {gtime4}
                                            </td>
                                            <td day="ПТ">
                                                {gtime5}
                                            </td>
                                            <td day="СБ">
                                                {gtime6}
                                            </td>
                                            <td day="ВС">
                                                {gtime7}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {gdescr !== '' ? (<span className="mapDescr">
                                    {gdescr}
                                </span>) : null}
                                {warn !== '' ? (<span className="mapWarning">
                                    {warn}
                                </span>) : null}
                                {warn2 !== '' ? (<span className="mapWarning">
                                    {warn2}
                                </span>) : null}
                            </div>
                        </li>
                    </div>

                </div>

            </div>
        </form >

    );

}

export default NewGroup;
