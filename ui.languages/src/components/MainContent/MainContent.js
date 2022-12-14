import style from './MainContent.module.css';
import { Link } from 'react-router-dom';


const MainContent = () => {
    return (
        <div className={style['main']}>
            <h1 className={style['title']}>“MNELA” - platform for language identification of text.</h1>
            <p className={style['text']}>This productive tool is designed to help you identify the text !</p>
            <Link to={'/login'}><div className={style['buttons']}>Let’s Start</div></Link>
            <div className={style['branch']}></div>           
        </div>
    );
}

export default MainContent;