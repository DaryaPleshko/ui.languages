//import { useState } from 'react';
import style from './Auth.module.css';
// import { http } from '../../hooks/http.hooks';
//import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../../context/auth';
// import { user } from '../../context/user';

const Auth = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const navigate = useNavigate();

    // const isValide = (email, pwd) => {
    //     if (email.length === 0 || pwd.length === 0) throw new Error('Вы не ввели всю информацию !');
    //     if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Некорректно введенный email !');
    //     return true;
    // }

    // const sendRequest = async () => {
    //     try {
    //         isValide(email, password);
    //         const data = await http('http://localhost:5000/users/auth', 'POST', { email, password })
    //         if (data.length) {
    //             console.log('+');
    //             auth.isAuth = true;
    //             user.user_id = data[0].id;
    //             navigate(`/task`, { state: { data: data } });
    //         }
    //     } catch (err) {
    //         alert(err.message);
    //     }
    // }


    return (
        <div className={style['container']}>
            <div className={style['footer']}>
                <p className={style['first-footer']}>Welcome to </p>
                <p className={style['second-footer']}>MNELA</p>
            </div>
            <ul className={style['list-input']}>
                <li> <input className={style['email']} placeholder="Email" /></li>
                <li> <input className={style['password']} type="password" placeholder="Password" /></li>
            </ul>
            <p className={style['auth']}>Not yet registered in MNELA?</p>
            <div className={style["create-account"]}>ENTER</div>
            <p className={style["text"]}>By clicking “ENTER” you will log in to your profile.</p>
        </div>
    );
}

export default Auth;
