import { ABOUT, MARKETPLACE, PRODUITS, RESSOURCES } from '../../constants'
import FooterItem from "./FooterItem";

const ItemsContainer = () => {

  return (
    <div className='grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8'>
        <FooterItem Links={PRODUITS} title="Produits"/>
        <FooterItem Links={RESSOURCES} title="Ressources" />
        <FooterItem Links={ABOUT} title="A propos" />
        <FooterItem Links={MARKETPLACE} title="Supports" />
    </div>
  )
}

export default ItemsContainer