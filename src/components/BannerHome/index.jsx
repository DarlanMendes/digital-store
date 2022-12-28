import { useState } from 'react';
import Botao from '../Botao';
import styles from './styles.module.scss';
import ImagemP from '../assets/tenis1.png';
import backImagem from '../assets/Ornament.png'
export default function BannerHome() {
    const [showBanner, setShowBanner]=useState(0)
    const [banners, setBanners] = useState([
        {
            subtitulo: "Melhores ofertas personalizadas",
            titulo: "Queima de stoque Nike 🔥",
            paragrafo: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            imagemP:ImagemP,
            backImagem: backImagem
        }
        , {
            subtitulo: "Melhores ofertas personalizadas",
            titulo: "Tênis novos para você ",
            paragrafo: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            imagemP:ImagemP,
            backImagem: backImagem
        },
        {
            subtitulo: "Melhores ofertas personalizadas",
            titulo: "Queima de stoque Nike 🔥",
            paragrafo: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            imagemP:ImagemP,
            backImagem: backImagem
        },
        {
            subtitulo: "Melhores ofertas personalizadas",
            titulo: "Teste de stoque Nike 🔥",
            paragrafo: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            imagemP:ImagemP,
            backImagem: backImagem
        }
    ])
    return (
        <div className={styles.bannerContainer}>
            
                {banners && banners.map((banner, index) => (
                    <div key={index} className={styles.subContainerBanner} style={showBanner===index?{display:"flex"}:{display:"none"}}>
                        <div className={styles.textoContainer}>
                            <span>{banner.subtitulo}</span>
                            <h1>{banner.titulo}</h1>
                            <p>{banner.paragrafo}</p>
                            <div className={styles.botao}>
                                <Botao
                                    texto={"Ver Ofertas"}
                                    largura={"100%"}
                                    altura={"48px"}
                                    corFundo={"#C92071"}
                                />
                            </div>
                        </div>
                        <div className={styles.imagemContainer}>
                            <img 
                            className={styles.imagem}
                             src={banner.imagemP} 
                             alt="imagem produto"/>
                            <img 
                            className={styles.imgBack}
                            src={banner.backImagem}
                             alt="imagem background"/>
                        </div>
                        
                    </div>


                ))}
                {banners.map(( a,index)=>(
                    <div key={index} className={styles.radioContainer}>
                       
                        <input type={"radio"} 
                       checked={showBanner===index?'true':'false'}
                        onClick={()=>{setShowBanner(index)}}
                        style={showBanner===index?{accentColor:"#C92071"}:{accentColor:"#CCCCCC"}}/>
                    </div>
                ))}

        </div>
    )
}