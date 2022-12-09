import style from './AboutUs.module.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className={style['container']}>
            <div className={style['title']}>ABOUT MNELA</div>
            <div className={style['flex']}>           
                <div>
                    <div className={style['first']}></div>
                    <p className={style['text']}>“MNELA” - the scientific platform that started in 2022 !
                    Our platform is designed for fast and correct text identification.</p>
                </div>
                <div>
                    <div className={style['second']}></div>
                    <p className={style['text']}>We aim to promote the platform on a global level,
to improve the quality of their scientific research.</p>
                </div>
                <div>
                    <div className={style['third']}></div>
                    <p className={style['text']}>We started our activity as a group of enthusiasts who 
                    believed that perseverance and perseverance on the way to achieving the goal would give positive results. And we succeeded!</p>
                </div>
            </div>
            <Link to={'/'}><div className={style['btn']}>Go Back !</div></Link>
        </div>
    );

}

export default AboutUs;