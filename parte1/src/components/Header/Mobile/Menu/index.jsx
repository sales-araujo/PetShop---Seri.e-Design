import { CategoryMenu } from '../../../../resources/categoryMenu'
import sideBar from '../../../../assets/icons/sideBar.png'
import close from '../../../../assets/icons/close.png'
import s from '../../styles.module.css'
import { useRef } from "react"

export function HeaderMobile(){
  const refOpenModal = useRef(null)
  const refsideBarIcon = useRef(null)
  const refcloseIcon = useRef(null)

  function handleOpenModal(){
    const modalNavBar = refOpenModal.current
    const closeIconEl = refcloseIcon.current
    const sideBarIconEl = refsideBarIcon.current

    modalNavBar.classList.toggle(`${s.activeModal}`)
    closeIconEl.classList.toggle(`${s.disabled}`)
    sideBarIconEl.classList.toggle(`${s.disabled}`)
  }

  return (
    <div className={s.containerSideBarMobile}>
      <button onClick={handleOpenModal}>
        <img src={sideBar} ref={refsideBarIcon} className={s.sideBarIcon} alt="Menu"/>
        <img src={close} ref={refcloseIcon} className={`${s.closeIcon} ${s.disabled}`} alt="Menu"/>
      </button>
      <div ref={refOpenModal} className={s.modalContainerHeader}>
        <div className={s.containerNavBarMobile}>
          <nav className={s.wrapperNavBarMobile}>
            {
              CategoryMenu.map((menu, index) => {
                const { link, name } = menu

                return (
                  <a key={index} href={link}>{name}</a>
                )
              })
            }
          </nav>
        </div>
      </div>
    </div>
  )
}