import Styles from "./header.module.css";

const header = ()=>{
    return (
        <div id={Styles.headerDiv}>
            <h2 id={Styles.title}>PhishFender</h2>
        </div>
    );
}

export default header;