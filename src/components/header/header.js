import logo from "../../assets/images/logo.svg";
import "../../assets/styles/basic_styles.css";

function Header() {
    return(
        <div className="header">

            <img src={logo} className="header-logo" alt="logo"/>
            <h3 className="header-title">Search Github Users</h3>

        </div>
    )
}

export default Header