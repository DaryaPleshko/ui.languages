import style from './Languages.module.css';

const Languages = () => {
    return (
        <div className={style['container']}>

            <p className={style["title"]}>Enter the identification text</p>
            <input className={style['text-input']} maxlength="65" placeholder="Enter the text..." />
            <div className={style["check"]}>Verify</div>
        </div>
    );

}

export default Languages;