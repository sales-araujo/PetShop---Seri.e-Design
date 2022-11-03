import s from './styles.module.css'
import { CarouselBanner } from "../CarouselBanner"
import { ShowCaseProduct } from "../ShowCaseProduct"
import { Newsletter } from '../Newsletter'

export function Main (){
  return (
    <main className={s.containerMainPage}>
      <CarouselBanner/>
      <ShowCaseProduct/>
      <Newsletter/>
    </main>
  )
}