import iconPet from '../../assets/icons/iconPet.png'
import s from './styles.module.css'
import { useState } from 'react'

export function Newsletter(){
  const [showMessage, setShowMessage] = useState(false)

  function handleSendRegistration(e){
    e.preventDefault()

    setShowMessage(true)

    setInterval(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <section className={s.containerNewsletter}>
      <div className={s.containerInfoNewsletter}>
        <div className={s.wrapperInfoNewsletter}>
          <img src={iconPet} alt="Icone de Pet"/>
          <p><span>entrega grauita</span> a partir de r$ 99,00</p>
        </div>
        <div className={s.wrapperInfoNewsletter}>
          <img src={iconPet} alt="Icone de Pet"/>
          <p><span>parcelamento</span> sem juros</p>
        </div>
        <div className={s.wrapperInfoNewsletter}>
          <img src={iconPet} alt="Icone de Pet"/>
          <p><span>cadastre-se</span> e ganhe desconto</p>
        </div>
      </div>
      <div className={s.titleWrapperNewsletter}>
        <h2>assine nossa newsletter</h2>
        <p>Cadastre-se para receber nossas novidades e descontos exclusivos!</p>
      </div>
      {
        !showMessage &&
        <form onSubmit={(e) => handleSendRegistration(e)} className={s.formNewsletter}>
          <div className={s.inputFormWrapper}>
            <input 
              type='text'
              placeholder='Nome'
              required
            />
            <input 
              type='email'
              placeholder='Email'
              required
            />
          </div>
          <button>enviar</button>
        </form>
      }
      {
        showMessage && 
        <div className={s.messageSend}>
          <img src={iconPet} alt="Icone de Pet"/>
          <p>Mensagem enviada com sucesso!</p>
        </div>
      }
    </section>
  )
}