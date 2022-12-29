import styles from './styles.module.scss'
import Botao from '../Botao'
import tenis from '../../assets/images/tenis-oferta.png'
import  elipse from '../../assets/images/elipse.png'

export default function  OfertaEspecial (){
  return (
    <div className={styles.ofertaEspecialContainer}>
      
      <figure className={styles.imagemContainer}>
        <img src={elipse} alt='elipse roxa' className={styles.elipse}/>
         <img src={tenis} alt='tenis' className={styles.tenis}/>
      </figure>
      <div className={styles.textoContainer}>
        <span>Oferta especial</span>
        <h2>Air Jordan edição de colecionador</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nostrum atque perferendis, blanditiis earum accusantium mollitia minus iste autem molestiae, fgfgfgvvvsfgrsrgrgrgrggrrgfefab pariatur minima eius ad quos beatae hic magnam nam.</p>
        <div className={styles.botao}>
        <Botao texto={'Ver Oferta'} cor={'white'} largura={'200px'} corFundo={'#C92071'}  />
        </div>
       
      </div>
      
      
    </div>
  )
}
