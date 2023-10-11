import style from './Body01.module.css';

export function Body01 () {
    return (
        <div className={style.contentinfo}>

            <div className={style.content}>
              <strong>Hi, I am Oyindamola Bakare</strong>

              <div className={style.contentspan}> 
                <h1>Frontend Developer</h1>

                <span>
                  <button title="Click for Download my CV">Download CV</button>
                </span>

                <button title="Click for look my course">Learn More</button>
                
              </div>
             </div>

              <img className={style.img}
               src="https://github.com/Puy0l.png"
              />
          </div>

    )
}