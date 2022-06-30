import "../../assets/styles/basic_styles.css";
import {useState} from "react";
import Result_search from "./search_result.js";

function Main() {

    let [InputText, SetInput] = useState("")
    let [Text, SetText] = useState("")
    let [View, SetView] = useState({
        view: false,
        text: false
    })
    const InputValue = () => {
        console.log(InputText)
        setTimeout(checkText, 100)
    }
    const checkText = () => {
        if (View.view === false) {
            if (InputText === "" && Text === "") {
                SetView({
                    view: false,
                    text: false
                })
            }else if (Text === InputText) {
                SetView({
                    view: true,
                    text: true
                })
            }else {
                SetText(InputText)
                SetView({
                    view: true,
                    text: true
                })
            }
        }else {
            if (InputText === "") {
                SetView({
                    view: false,
                    text: false
                })
            }else if (Text === InputText) {
                SetView({
                    view: true,
                    text: true
                })
            }else {
                SetText(InputText)
                SetView({
                    view: false,
                    text: true
                })
                setTimeout(SetView, 100, {
                    view: true,
                    text: true
                })
            }

        }
    }

    return(
        <div className="main">
            <form>
            <input onChange={(event) => {
                SetInput(event.target.value)
            }} type="text" className="input_search"/>
            <button onClick={InputValue} type="button" className="submit_search">Search</button>
            </form>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            {View.view && View.text && <Result_search name={Text}/>}
        </div>
    )
}

export default Main