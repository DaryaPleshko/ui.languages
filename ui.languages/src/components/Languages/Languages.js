import style from './Languages.module.css';
import { Link } from 'react-router-dom';

const Languages = () => {
    return (
        <div className={style['container']}>
            <div className={style['title']}>ABOUT MNELA</div>
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
            <Link to={'/'}><div className={style['btn']}>Go Back !</div></Link>
        </div>
    );

}

export default Languages;