import style from './Body04.module.css';

import Vector from '../imagen/Vector.svg';
import DEV from '../imagen/DEV.svg';
import Design from '../imagen/Design.svg';

export function Body04() {
    return(
        <div className={style.job}>

               <strong>What I do</strong> 

            <div className={style.choose}>

                <div className={style.soft}>

                    <div>
                        <img 
                            src={Vector} alt="Vector" 
                        />
                    </div>
                    <div>
                        Software Development
                    </div>
                    
                </div>

                <div className={style.web}>
                    <div>
                        <img 
                            src={DEV} alt="DEV" 
                        />
                    </div>
                    <strong>Web Development</strong>
                </div>

                <div className={style.design}>
                    <div>
                        <img 
                            src={Design} alt="Design" 
                        />
                    </div>
                    <strong>Web Design</strong>
                </div>
            </div>
            
        </div>
    )
}