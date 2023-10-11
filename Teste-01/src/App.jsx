import style from './App.module.css';
import { Body01 } from './Componentes/Body01';
import { Body02 } from './Componentes/Body02';
import { Body03 } from './Componentes/Body03';
import { Body04 } from './Componentes/Body04';
import { Body05 } from './Componentes/Body05';
import { Body06 } from './Componentes/Body06';
import { Header } from './Componentes/Header';
import './global.css';

export function App() {
  return (
     
     <div className={style.body}> 

      <header>
        <div className={style.header}>
          <Header />
        </div>
      </header>


      <main>
        <Body01 />
        <Body02 />
        <Body03 />
        <Body04 />
        <Body05 />
        <Body06/>
      </main>

    <footer>
      <a href="">© Oyindamola 2020</a>
    </footer>

     </div>
      
  )
}