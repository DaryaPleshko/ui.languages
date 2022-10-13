import style from './Header.module.css';
//import { Link } from 'react-router-dom';
import HeaderItem from './HeaderItem'

const Header = () => {
    const link = ['About Us', 'Contact'];

    return (
        <header className={style['header']}>
            <h1 className={style['logo']}>MNELA</h1>
            <div className={style['flex']}>
                {link.map((el, index) => <HeaderItem key={index} name={el} />)}
                <div className={style['call']}></div>
                <div className={style['num']}>+375 29 626-23-23</div>
            </div>
            {/* <Link to={'/register'}><div className={style['signup-button']}>Sign In</div></Link> */}
        </header>
    );

}

export default Header;