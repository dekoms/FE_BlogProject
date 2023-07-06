{/* 백엔드로부터 토큰 및 데이터 받아오기 */}
import { useState } from 'react';
import axios from "axios"

function App(){

    const [id, setId] = useState();
    const [pw, setPw] = useState();

    function onLogin(){
        const data = {
            username: id,
            password: pw
        }

        console.log(data);

        axios.post('tokens/', data) 
            .then(res => {
                console.log(res.data);

            })
            .catch(error => {
                console.log("error");
            });
        }

    

    return (
        <>
            <input type="text"  onChange={(e)=>{
                setId(e.target.value);
            }}></input>

            <input type="text"  onChange={(e)=>{
                setPw(e.target.value);
            }}></input>

            <button onClick = {onLogin} ></button>
        </>
    );
}

export default App;