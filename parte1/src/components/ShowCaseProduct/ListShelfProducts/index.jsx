import s from '../style.module.css'

export function ListShelfProducts(props){
  const { badge, image, name, price, installmentPrice } = props

  return (
    <a href="#" className={s.cardProductWrapper}>
      <div className={s.wrapperInfoProduct}>
        <div className={s.wrapperShelfProduct}>
          {
            badge.length !== 0 &&
            <span className={s.discountProduct}>{badge}</span>
          }
          <div className={s.imageShelf}>
            <img src={image} alt="Imagem do produto"/>
          </div>
          <div className={s.btnBuyProduct}>
            <button>compra rápida</button>
          </div>
        </div>
        <p className={s.nameProduct}>{name}</p>
        <p className={s.priceProduct}>{price}</p>
        <p className={s.installmentPrice}>{installmentPrice}</p>
      </div>
    </a>
  )
}