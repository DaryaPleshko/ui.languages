import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style['header']}>
            <h1 className={style['logo']}>MNELA</h1>
            <div className={style['flex']}>
                <Link to={'/about'}><p className={style['about-us']}>About Us</p></Link>
                <Link to={'/register'}><div className={style['signup-btn']}>Sign In</div></Link>
                <div className={style['call']}></div>
                <div className={style['num']}>+375 29 622-44-80</div>
            </div>

        </header>
    );

}

export default Header;