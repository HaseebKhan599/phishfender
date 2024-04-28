import Styles from "./header.module.css";

const header = ()=>{
    return (
        <div id={Styles.headerDiv}>
            <div id={Styles.gridContainer} class="container">
                <div id={Styles.gridRow1} class="row">
                    <div id={Styles.gridCol1} class="col-sm-4">
                        <h2 id={Styles.title}>PhishFender</h2>
                    </div>
                    <div id={Styles.gridCol2} class="col-sm-3">

                    </div>
                    <div id={Styles.gridCol3} class="col-sm-5">
                    
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default header;