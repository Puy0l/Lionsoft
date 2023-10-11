import style from './Body05.module.css';

export function Body05 () {
    return(
        <div className={style.mind}>

            <strong>My Skills</strong>

            <div className={style.skill}>

                <div>

                    <strong>50%</strong>

                    <div className={style.name}>
                        HTML
                    </div>
                    
                </div>

                <div>

                    <strong>20%</strong>

                    <div className={style.name}>
                        CSS
                    </div>

                </div>

                <div>

                    <strong>10%</strong>

                    <div className={style.name}>
                        JavaScript
                    </div>

                </div>
                
                <div>

                    <strong>2%</strong>

                    <div className={style.name}>
                        ReactJS
                    </div>

                </div> 
            </div>
        
        </div>
    )
}