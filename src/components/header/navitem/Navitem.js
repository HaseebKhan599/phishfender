import Styles from "./Navitem.module.css";

const Navitem = ()=>{
    return (
        <a href="www.google.com" target="_blank">
            <div id={Styles.navItemDiv}>
                <p>Overview</p>
            </div>
        </a>
    );
}

export default Navitem;