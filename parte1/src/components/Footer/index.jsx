import logo from '../../assets/images/logo.png'
import iconFacebook from '../../assets/icons/facebook.png'
import iconTwitter from '../../assets/icons/twitter.png'
import iconInstagram from '../../assets/icons/instagram.png'
import visa from '../../assets/icons/visa.png'
import mastercard from '../../assets/icons/mastercard.png'
import american from '../../assets/icons/american.png'
import dinnersClub from '../../assets/icons/dinersclub.png'
import hipercard from '../../assets/icons/hipercard.png'
import aura from '../../assets/icons/aura.png'
import elo from '../../assets/icons/elo.png'
import boleto from '../../assets/icons/boleto.png'
import serieDesign from '../../assets/images/serieDesign.png'
import s from './styles.module.css'

export function Footer(){
  return (
    <section className={s.containerFooter}>
      <div className={s.wrapperBoxFooter}>
        <div className={s.containerInfoPetStore}>
          <div className={s.logoFooter}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={s.socialNetworks}>
            <a href='#'>
              <img src={iconFacebook} alt="Logo facebook" />
            </a>
            <a href='#'>
              <img src={iconInstagram} alt="Logo instagram" />
            </a>
            <a href='#'>
              <img src={iconTwitter} alt="Logo twitter" />
            </a>
          </div>
          <div className={s.storeData}>
            <p>&copy; 2022 - CNPJ 00.000.000/0000-00</p>
            <p>Rua Tal de Tal, 123 - Cidade, Estado</p>
          </div>
        </div>
        <div className={s.containerNavFooter}>
          <p className={s.titleNavFooter}>pet store</p>
          <a href="#" className={s.navBarFooter}>Quem Somos</a>
          <a href="#" className={s.navBarFooter}>Como Comprar</a>
          <a href="#" className={s.navBarFooter}>Trocas e Devoluções</a>
          <a href="#" className={s.navBarFooter}>Frete e Entregas</a>
        </div>
        <div className={s.containerContact}>
          <p className={s.titleContact}>contato</p>
          <p className={s.infoContact}>(99) 9999-9999</p>
          <p className={s.infoContact}>(99) 9999-9999</p>
          <p className={s.infoContact}>petstore@petstore.com.br</p>
        </div>
        <div className={s.containerPayment}>
          <p className={s.titlePayment}>pagamento</p>
          <div className={s.wrapperFlags}>
            <img src={visa} alt='Bandeira visa'/>
            <img src={mastercard} alt='Bandeira mastercard'/>
            <img src={american} alt='Bandeira american express'/>
            <img src={dinnersClub} alt='Bandeira dinners club'/>
            <img src={hipercard} alt='Bandeira hipercard'/>
            <img src={aura} alt='Bandeira aura'/>
            <img src={elo} alt='Bandeira elo'/>
            <img src={boleto} alt='Boleto'/>
          </div>
        </div>
      </div>
      <div className={s.developmentPlatform}>
        <p>tecnologia e desenvolvimento:</p>
        <a href='https://seriedesign.com.br/' target= "_blank" rel="noreferrer noopener">
          <img src={serieDesign} alt="Logo Seri.e Design" />
        </a>
      </div>
    </section>
  )
}