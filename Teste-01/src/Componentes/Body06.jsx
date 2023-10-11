import style from './Body06.module.css';

export function Body06() {
    return (
        <div className={style.docs}>

            <strong>Get in touch</strong>
            
            <div className={style.names}>

                <div className={style.info}>

                    Name

                    <div className={style.name}>
                        Last Name
                    </div>
            
                </div>
            </div>

            <div className={style.names}>

                <div className={style.info}>

                    Email

                    <div className={style.name}>
                        Phone Number
                    </div>

                </div>
            </div>

            <form className={style.form}>

                <textarea 
                
                placeholder="Mensagem..."

                />
            <footer>

                <button type="submit">Submit now</button>
                
            </footer>
                
            </form>
        </div>
    )
}