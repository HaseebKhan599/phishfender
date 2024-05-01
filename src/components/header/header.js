import Styles from "./Header.module.css";
import Navitem from "./navitem/Navitem";

const Header = ()=>{
    const navItems = ['Overview', 'Downloads', 'Contact'];

    return (
        <div id={Styles.headerDiv}>
            <div id={Styles.titleDiv}>
                <h2 id={Styles.title}>PhishFender</h2>
            </div>
            <div id={Styles.navItemsDiv}>
                <Navitem item={navItems[0]}/>
                <Navitem item={navItems[1]}/>
                <Navitem item={navItems[2]}/>
            </div>
        </div>
    );
}

export default Header;