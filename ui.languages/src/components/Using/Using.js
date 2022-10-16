import style from './Using.module.css';
import { Link } from 'react-router-dom';

const Using = () => {
    return (
        <div className={style['container']}>
            <div className={style['title']}>TERMS OF USE MNELA</div>
            <div className={style['flex']}>
                <div>
                    <div className={style['first']}></div>
                    <p className={style['text']}>first</p>
                </div>
                <div>
                    <div className={style['second']}></div>
                    <p className={style['text']}>second</p>
                </div>
                <div>
                    <div className={style['third']}></div>
                    <p className={style['text']}>third</p>
                </div>
            </div>
            <Link to={'/languages'}><div className={style['btn']}>Go Back !</div></Link>
        </div>
    );

}

export default Using;