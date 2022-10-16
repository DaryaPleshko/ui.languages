import { useState } from 'react';
import { http } from '../../hooks/http.hooks';
import { Link, useNavigate } from 'react-router-dom';
import style from './Register.module.css';
import { regis } from '../../context/regis';

const Register = () => {
    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPwd, setConfPwd] = useState('');

    const navigate = useNavigate();

    const isValidation = (name, email, pwd, conpwd) => {
        if (name.length === 0 || email.length === 0 || pwd.length === 0 || confPwd.length === 0) throw new Error('Вы не ввели всю информацию !');
        if (!/^[а-яА-Яa-zA-Z ]+$/g.test(name)) throw new Error('Некорректно введеноe ФИО !');
        if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Некорректно введенный email !');
        if (pwd.length <= 7) throw new Error('Пароль должен содержать минимум 8 символов !');
        if (pwd !== conpwd) throw new Error('Повторите пароль');
        return true;
    }

    const request = async () => {
        try {
            isValidation(name, email, password, confPwd);
            const data = await http('http://localhost:5000/user/register', 'POST', { name, email, password });
            console.log(data);
            if (data.length) {
                regis.isReg = true;
                navigate(`/languages`, { state: { data: data } });
            }
        } catch (err) {
            alert(`ОШИБКА! ${err.message}`);
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
                <li> <input className={style['name']} placeholder="Full Name" onChange={(event) => setFullName(event.target.value)} /></li>
                <li> <input className={style['email']} placeholder="Email" onChange={(event) => setEmail(event.target.value)} /></li>
                <li> <input className={style['password']} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} /></li>
                <li> <input className={style['confirm-password']} type="password" placeholder="Confirm Password" onChange={(event) => setConfPwd(event.target.value)} /></li>
            </ul>
            <Link to={'/login'}><p className={style['regis']}>Already registered in MNELA?</p></Link>
            <div className={style["create-account"]} onClick={request}>Create a profile</div>
            <p className={style["text"]}>By clicking “Create a profile” you you register in MNELA.</p>
        </div>
    )
}



export default Register