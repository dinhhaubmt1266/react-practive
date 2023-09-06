import React, {useState}from "react";
import "./ToggleStyle.css";
// stateless ko su dung state
// function Toggle(){
//     return <div className="toggle"></div>;
// }


// // stateful su dung state
// function Toggle2(){
//     // const [count, setCount] = useState();
//     return <div className="toggle"></div>;
// }

function Toggle(){
    // 1. enable state: useState(initialize value)
    // 2. initialize state: useState(false)
    // 3. reading state:
    // 4. update state
    // const array = useState(false);
    // console.log(array);
    // // console.log(array[0]);
    // // console.log(array[1]);
    // const arr = [1,2];
    // console.log(arr[0], arr[1]);
    // const [a,b] = [1,2];
    // console.log(a,b);
    const [on, setOn] = useState(false);
    console.log(on);
    const handleToggle = () => {
        setOn((on) => {
            console.log(on);
            return !on;
        });
    }
    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                <div className={`spinner ${on ? "active": ""}`}></div>
            </div>
            {/* {on ? 'On' : "Off"} */}
            {/* <div className="toggle-control">
                <div className="toggle-on" onClick={() => setOn(true)}>On</div>
                <div className="toggle-on" onClick={() => setOn(false)}>Off</div>
            </div> */}
        </div>
    );
}

export default Toggle;