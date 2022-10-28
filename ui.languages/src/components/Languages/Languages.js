import style from './Languages.module.css';
import { useState } from 'react';
//import { http } from '../../hooks/http.hooks';
//import { user } from '../../context/user';


const Languages = () => {
    const [dataCreate, setDataCreate] = useState({ history: '' })

    const sendCRUD = async () => {
        try {
            if (dataCreate.history) {
                console.log("+")
               // const data = await http(`http://localhost:5000/history/${user.user_id}`, 'POST', { ...dataCreate })
                // console.log(user.user_id);
                // console.log(data);
            }
        } catch (err) {
            alert(err.message);
        }
    }




    return (
        <div className={style['container']}>
            <p className={style["title"]}>Enter the identification text</p>
            <input className={style['text-input']} maxlength="65" placeholder="Enter the text..." />
            <div className={style["check"]}>Verify</div>
        </div>
    );

}
    export default Languages;