import { useState } from 'react'
import backToTop from '../../assets/icons/backToTop.png'
import iconWhatsapp from '../../assets/icons/iconWhatsapp.png'
import s from './style.module.css'

function ScrollToTop(){
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return(
    <>
      <button
        className={s.arrowScroll}
        onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}}
      >
        <img src={backToTop} alt="Seta para cima"/>
      </button>
      <button className={s.iconWhatsapp}>
        <img src={iconWhatsapp} alt="Icone do whatsapp"/>
      </button>
    </>
  )
}

export default ScrollToTop
