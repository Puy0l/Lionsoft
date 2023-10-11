import style from './Header.module.css';

export function Header() {
    return (
        <div className={style.header}>

            <div className={style.headercont}>
                <strong>Oyindamol</strong>

                <div className={style.left}>
                    <a href="http://localhost:5174/" title="CLick for more information about me ">About me</a>
                    <a href='' title="Click if you want to know about the services">Services</a>
                <a href='' title="Click for Contect me">Contact me</a>
                </div>
            </div>
        </div>
            
    )
}