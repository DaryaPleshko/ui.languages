import style from './Languages.module.css';
import { Link } from 'react-router-dom';

const Languages = () => {
    return (
        <div className={style['container']}>
            <div className={style['wrapper']}>
                <h1 className={style['logo']}>MNELA</h1>
                <div className={style['flex']}>
                    <Link to={'/about'}><p className={style['header-text']}>About Us</p></Link>
                    <Link to={'/using'}><p className={style['header-text']}>Terms Of Use</p></Link>
                    <Link to={'/'}><div className={style['signup-btn']}>Sign Out</div></Link>
                </div>
            </div>
            <input className={style['text-input']} maxlength="65" placeholder="Enter the text..." />
        </div>
    );

}

export default Languages;