import logo from '../../assets/images/logo.png'
import lupa from '../../assets/icons/lupa.png'
import login from '../../assets/icons/login.png'
import carrinho from '../../assets/icons/carrinho.png'
import sideBar from '../../assets/icons/sideBar.png'
import s from './styles.module.css'
import { CategoryMenu } from '../../resources/CategoryMenu.jsx'
import { HeaderMobile } from './Mobile/Menu'

export function Header(){
  return (
    <header className={s.containerHeaderPage}>
      <section className={s.wrapperHeader}>
        <div className={s.searchProductWrapper}>
          <input 
            type='text' 
            placeholder='Pesquisar...'
          />
          <span>
            <img src={lupa} alt='Lupa' />
          </span>
        </div>
        <HeaderMobile/>
        <a href='#' className={s.logoPage}>
          <img src={logo} alt="Logo" />
        </a>
        <div className={s.iconsHeader}>
          <img src={login} alt='Login' />
          <img src={carrinho} alt='Login' />
        </div>
      </section>
      <section className={s.containerNavBar}>
        <nav className={s.wrapperNavBar}>
          <>
            {
              CategoryMenu.map((menu, index) => {
                const { link, name } = menu

                return (
                  <div key={index} className={s.menuItem}>
                    <a href={link}>{name}</a>
                  </div>
                )
              })
            }
            <div className={s.sideBar}>
              <img src={sideBar} alt='Menu' />
            </div>
          </>
        </nav>
      </section>
    </header>
  )
}