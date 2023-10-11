import style from './Body03.module.css';

export function Body03 () {
    return (
        <div className={style.info}>
            
            <div className={style.name}>
                <div>
                    <img src="https://www.colorcombos.com/images/colors/27AE60.png" />
                </div>
                
                <strong>Full Name</strong>
                <span>Your name goes here</span>

            </div>

            <div className={style.email}>
                <div>
                    <img src="https://www.colorcombos.com/images/colors/27AE60.png" />
                </div>

                <strong>Email Address</strong>
                <span>Your email goes here</span>
            </div>

            <div className={style.twitter}>

                <div>
                    <img src="https://www.colorcombos.com/images/colors/27AE60.png" />
                </div>

                <strong>Twitter</strong>
                <span>Your email goes here</span>
            </div>

            <div className={style.phone}>

                <div>
                    <img src="https://www.colorcombos.com/images/colors/27AE60.png" />
                </div>

                <strong>Phone</strong>
                <span>Your name goes here</span>
            </div>

        </div>
    )
}