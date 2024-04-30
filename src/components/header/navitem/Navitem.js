import Styles from "./Navitem.module.css";

const Navitem = ()=>{
    return (
        <a href="www.google.com" target="_blank">
            <div id={Styles.navItemDiv}>
                <p id={Styles.navItem}>Overview</p>
            </div>
        </a>
    );
}

export default Navitem;