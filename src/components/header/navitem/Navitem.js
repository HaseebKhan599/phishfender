import Styles from "./Navitem.module.css";

const Navitem = (props)=>{
    return (
        <a href="www.google.com" target="_blank">
            <div id={Styles.navItemDiv}>
                <p id={Styles.navItem}>{props.item}</p>
            </div>
        </a>
    );
}

export default Navitem;