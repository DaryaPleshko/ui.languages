import Using from "../../components/Using/Using";
import style from './UsingPage.module.css';



const UsingPage = () => {
    return (
        <div className={style['about-us-page']}>
            <div className={style['branch']}>
                <Using />
            </div>
        </div>
    );

}
export default UsingPage;