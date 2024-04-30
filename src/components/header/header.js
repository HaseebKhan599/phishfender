import Styles from "./Header.module.css";
import Navitem from "./navitem/Navitem";

const Header = ()=>{
    return (
        <div id={Styles.headerDiv}>
            <div id={Styles.titleDiv}>
                <h2 id={Styles.title}>PhishFender</h2>
            </div>
            <div id={Styles.navItemsDiv}>
                <Navitem/>
                <Navitem/>
                <Navitem/>
            </div>
        </div>
    );
}

export default Header;