import AboutUs from "../../components/AboutUs/AboutUs";
import style from './AboutUsPage.module.css';



const AboutUsPage = () => {
    return (
        <div className={style['main-page']}>
            <div className={style['branch']}>
                <AboutUs />
            </div>
        </div>
    );
}
export default AboutUsPage;