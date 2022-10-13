//import { useState } from 'react';
import style from './Register.module.css';
//import { http } from '../../hooks/http.hooks';
//import { Link, useNavigate } from 'react-router-dom';
//import { auth } from '../../context/auth';

const Register = () => {
    // const [name, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confPwd, setConfPwd] = useState('');

    // const navigate = useNavigate();

    // const isValid = (name, email, pwd, conpwd) => {
    //     if (name.length === 0 || email.length === 0 || pwd.length === 0 || confPwd.length === 0) throw new Error('Вы не ввели всю информацию !');
    //     if (!/^[а-яА-Яa-zA-Z ]+$/g.test(name)) throw new Error('Некорректно введено ФИО !');
    //     if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Некорректно введенный email !');
    //     if (pwd.length <= 7) throw new Error('Пароль должен содержать минимум 8 символов !');
    //     if (pwd !== conpwd) throw new Error('Повторите пароль')
    //     return true;
    // }

    // const sendRequest = async () => {
    //     try {
    //         isValid(name, email, password, confPwd);
    //         console.log("+");
    //         const data = await http('http://localhost:5000/users/register', 'POST', { name, email, password });
    //         console.log(data);
    //         if (data.length) {
    //             auth.isAuth = true;
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
                <li> <input className={style['name']} placeholder="Full Name" /></li>
                <li> <input className={style['email']} placeholder="Email" /></li>
                <li> <input className={style['password']} type="password" placeholder="Password" /></li>
                <li> <input className={style['confirm-password']} type="password" placeholder="Confirm Password" /></li>
            </ul>
            <p className={style['auth']}>Already registered in MNELA?</p>
            <div className={style["create-account"]}>Create a profile</div>
            <p className={style["text"]}>By clicking “Create a profile” you you register in MNELA.</p>
        </div>
    )
}



export default Register