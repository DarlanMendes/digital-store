import Carousel from 'better-react-carousel'
import styles from './styles.module.scss'
import tenis from "./tenis1.png"
import ornament from "./Ornament.png"
import Botao from '../Botao'



const Banner = () => {


  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: '12px',
        width: '12px',
        background: isActive ? "#C92071" : "#CCCCCC",
        borderRadius: "50%",
        position: 'relative',
        top: '-53px',
      }}
    ></span>
  )


  return (
    <div className={styles.bannerContainer}>
      <Carousel cols={1}
        rows={1}
        gap={10}
        showDots={true}
        dot={MyDot}
        loop={true}
        containerStyle={{height: "681px"}}
       
      >

        <Carousel.Item >
          <div style={{ display: "flex", alignItems:'center', justifyContent:'center'}}>
            <div style={{ height: 'calc(681px - 124px)', width: 'calc(90vw - 1000px)', paddingTop: '124px', paddingLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '0' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#F6AA1C', margin: '0', marginBottom: '20px' }}>Melhores ofertas personalizadas</h2>
              <h1 style={{ fontSize: '64px', fontWeight: '800', color: '#1F1F1F', fontFamily: 'Inter', width: '510px', margin: '0', marginBottom: '20px', lineHeight: '66px' }}>Queima de stoque Nike 🔥</h1>
              <p style={{ fontSize: '18px', fontWeight: '400', color: "#474747", fontFamily: 'Inter', width: '495px', margin: '0', marginBottom: '40px', height: '68px', lineHeight: '34px' }}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <Botao texto={"Ver Ofertas"} cor={'#C92071'} largura={'220px'} />
            </div>

            <div style={{ width: "935.61px", height: "650px" }}>
              <img src={tenis} />
            </div>

          </div>

        </Carousel.Item>
        <Carousel.Item >
          <div style={{ display: "flex" }}>
            <div style={{ height: '681px', width: 'calc(100vw - 1000px)', paddingTop: '124px', paddingLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '0' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#F6AA1C', margin: '0', marginBottom: '20px' }}>Melhores ofertas personalizadas</h2>
              <h1 style={{ fontSize: '64px', fontWeight: '800', color: '#1F1F1F', fontFamily: 'Inter', width: '510px', margin: '0', marginBottom: '20px', lineHeight: '66px' }}>Queima de stoque Nike 🔥</h1>
              <p style={{ fontSize: '18px', fontWeight: '400', color: "#474747", fontFamily: 'Inter', width: '495px', margin: '0', marginBottom: '40px', height: '68px', lineHeight: '34px' }}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <Botao texto={"Ver Ofertas"} cor={'#C92071'} largura={'220px'} />
            </div>

            <div style={{ width: "835.61px", height: "650px" }}>
              <img src={tenis} />
            </div>

          </div>
        </Carousel.Item>

        <Carousel.Item >
          <div style={{ display: "flex" }}>
            <div style={{ height: '681px', width: 'calc(100vw - 1000px)', paddingTop: '124px', paddingLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '0' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#F6AA1C', margin: '0', marginBottom: '20px' }}>Melhores ofertas personalizadas</h2>
              <h1 style={{ fontSize: '64px', fontWeight: '800', color: '#1F1F1F', fontFamily: 'Inter', width: '510px', margin: '0', marginBottom: '20px', lineHeight: '66px' }}>Queima de stoque Nike 🔥</h1>
              <p style={{ fontSize: '18px', fontWeight: '400', color: "#474747", fontFamily: 'Inter', width: '495px', margin: '0', marginBottom: '40px', height: '68px', lineHeight: '34px' }}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <Botao texto={"Ver Ofertas"} cor={'#C92071'} largura={'220px'} />
            </div>

            <div style={{ width: "835.61px", height: "650px" }}>
              <img src={tenis} />
            </div>

          </div>
        </Carousel.Item>









      </Carousel>
    </div>
  )
}

export default Banner