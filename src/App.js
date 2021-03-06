import React from 'react'
import "./App.css"
import {useDispatch, useSelector} from "react-redux";
import {decNumber, incNumber} from "./actions/changeNumber";
import {changeColorAction} from "./actions/changeColor";

const App = () => {
    const myStateNumber = useSelector((state) => state.changeTheNumber);
    // const myStateColor = useSelector((state) => state.changeTheColor);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <h1>Increment/Decrement counter</h1>
                <h4>Using React & Redux</h4>
                <div className="quantity">
                    <a className="quantity__minus" title="Decrement"
                       onClick={() => dispatch(decNumber())}><span>-</span></a>
                    <input name="quantity" type="text" className="quantity__input" value={myStateNumber}/>
                    <a className="quantity__plus" title="Increment"
                       onClick={() => dispatch(incNumber(5))}><span>+</span></a>
                </div>
                <div>Change Background color&nbsp;&nbsp;
                    <input type="text"
                        style={{border: '1px solid black'}}
                        /*value={myStateColor}*/
                        onBlur={(event) => dispatch(changeColorAction(event.target.value))}
                    />
                </div>
            </div>
        </>
    )
}

export default App;