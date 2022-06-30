import '../assets/styles/basic_styles.css';
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import logo from '../assets/images/logo.svg';

function App() {
  return (
    <div className="App">
        <img src={logo} className="bg-logo" alt="logo"/>

        <Header />

        <Main/>

        <Footer/>

    </div>
  );
}

export default App;
