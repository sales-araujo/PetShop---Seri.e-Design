import { CollectionProductNews } from "../../resources/CollectionsProduct"
import { CollectionProductHighlights } from "../../resources/CollectionsProduct"
import { ListShelfProducts } from "./ListShelfProducts"
import bannerDog from '../../assets/images/bannerDog.png'
import bannerCat from '../../assets/images/bannerCat.png'
import s from './style.module.css'

export function ShowCaseProduct(){
  return (
    <section className={s.containerShowCase}>
      <h2>novidades</h2>
      <div className={s.containerProducts}>
        {
          CollectionProductNews.map((item, index) => {
            const { image, name, price, installmentPrice, badge } = item

            return (
              <div key={index} className={s.shelfProducts}>
                <ListShelfProducts 
                  image={image}
                  name={name}
                  price={price}
                  installmentPrice={installmentPrice}
                  badge={badge}
                />
              </div>
            )
          })
        }
      </div>
      <div className={s.wrapperBannerProduct}>
        <a href="#">
          <img src={bannerDog} alt="Banner para gatos" />
        </a>
        <a href="#">
          <img src={bannerCat} alt="Banner para cachorro" />
        </a>
      </div>
      <h2>destaques</h2>
      <div className={s.containerProducts}>
        {
          CollectionProductHighlights.map((item, index) => {
            const { image, name, price, installmentPrice, badge } = item

            return (
              <div key={index} className={s.shelfProducts}>
                <ListShelfProducts 
                  image={image}
                  name={name}
                  price={price}
                  installmentPrice={installmentPrice}
                  badge={badge}
                />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}