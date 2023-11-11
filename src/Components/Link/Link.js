import logo from './../../logo.svg';


let linkName = "Выгрузка Bnovo";
let linkUrl = "https://hostel-ochag.ru/xls";
let linkDescr = "Trololo & Tralala link";
let linkLogo = logo;

function Link() {
    return (
        <div className="link-item">  
            <a href={linkUrl} target="_blank">
                <div>{linkLogo}</div>
                <div>
                    <div>{linkUrl}</div>
                    <div>{linkName}</div>
                    <div>{linkDescr}</div>
                </div>
            </a>
        </div>
    )
}

export default Link;
