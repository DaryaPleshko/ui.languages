import { useState } from 'react';
import { http } from '../../hooks/http.hooks';
import { Link, useNavigate } from 'react-router-dom';
import style from './Auth.module.css';
import { auth } from '../../context/auth';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const isValidation = (email, pwd) => {
        if (email.length === 0 || pwd.length === 0) throw new Error('Вы не ввели всю информацию !');
        if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Некорректно введенный email !');
        return true;
    }

    const request = async () => {
        try {
            isValidation(email, password);
            console.log('+');
            const data = await http('http://localhost:5000/user/auth', 'POST', { email, password })
            if (data.length) {
                console.log('+');
                auth.isAuth = true;
                navigate(`/languages`, { state: { data: data } });
            }
        } catch (err) {
            alert(err.message);
        }
    }

    const onKeyPressHandler = (event) => {
        if (event.key === 'Enter') request()
    }

    return (
        <div className={style['container']} onKeyPress={onKeyPressHandler}>
            <div className={style['footer']}>
                <p className={style['first-footer']}>Welcome to </p>
                <p className={style['second-footer']}>MNELA</p>
            </div>
            <ul className={style['list-input']}>
                <li> <input className={style['email']} placeholder="Email" onChange={(event) => setEmail(event.target.value)} /></li>
                <li> <input className={style['password']} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} /></li>
            </ul>
            <Link to={'/register'}><p className={style['auth']}>Not yet registered in MNELA?</p></Link>
            <div className={style["create-account"]} onClick={request}>ENTER</div>
            <p className={style["text"]}>By clicking “ENTER” you will log in to your profile.</p>
        </div>
    );
}

export default Auth;
