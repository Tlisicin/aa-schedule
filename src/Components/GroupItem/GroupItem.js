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
    const [email, setEmail] = useState("");
    const [descr, setDescr] = useState("");
    const [warn, setWarn] = useState("");
    const [gtype, setType] = useState("");
    const [med, setMed] = useState("");
    const [gclosed, setGclosed] = useState("");

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
        <>
            <h2 className="pageHeader">Название группы</h2>
            <div className="group__item">

                <div className="group__form">
                    <form className="" onSubmit={handleSubmit}>

                        <div>
                            <label>ID</label>
                            <input
                                type="text"
                                className="input gid"
                                value={id}
                                disabled
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
                                    value={long}
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
                                    value={med}
                                    onChange={(e) => setRegion(e.target.value)}>
                                    <option value="СПб">СПб</option>
                                    <option value="Л.О.">Л.О.</option>
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
                                value={descr}
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
                    </form>
                </div>

                <div classname="group__preview">

                    <ul className="show-all-array">
                        <li id="groupId-45" today="" className="spb">
                            <div> <span className="coord1">59.937088</span>
                                <span className="coord2">30.325015</span>
                                <span className="mapGroupNameInner today spb" groupid="groupId-45">
                                    «Солнечная Сторона Невского Проспекта»
                                </span>
                                <span className="mapMetro">
                                    Невский проспект
                                </span>
                                <span className="mapAdress">
                                    ул. Малая Конюшенная, 5
                                </span>
                                <a className="mapPhone" href="tel:+78129623352">
                                    +78129623352
                                </a>
                            </div>
                            <div>
                                <div className="groupCtrl"><span className="toggle-map"><span className="show-map"><i className="fa fa-map-o"></i><span>На карте</span></span><span className="hide-map"><i className="fa fa-map-o"></i><span>Скрыть карту</span></span></span><span className="toggle-fav" title="Закрепить / Открепить"><i className="fa fa-thumb-tack"></i></span></div><div className="currGroupMap" id="currGroupMap-45"></div>
                                <table className="mapSchedule">
                                    <tbody>
                                        <tr>
                                            <td day="ПН">
                                                12:00<br />
                                                19:00<br />
                                                20:30
                                            </td>
                                            <td day="ВТ" className="today_td">
                                                12:00<br />
                                                19:00<br />
                                                20:30
                                            </td>
                                            <td day="СР">
                                                12:00<br />
                                                19:00<br />
                                                20:30
                                            </td>
                                            <td day="ЧТ">
                                                12:00 (о)<br />
                                                19:00 (о)<br />
                                                20:30 (о)
                                            </td>
                                            <td day="ПТ">
                                                12:00<br />
                                                19:00<br />
                                                20:30
                                            </td>
                                            <td day="СБ">
                                                19:00 (о)<br />
                                                20:30 (о)
                                            </td>
                                            <td day="ВС">
                                                18:30 (о) <br />
                                                20:00 (о)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span className="mapDescr">
                                    Рабочее собрание — посл. суббота месяца, 17:00
                                </span>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>
        </>
    );

}

export default GroupItemForm;
