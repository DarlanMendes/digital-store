import CadastroContainer from "../../components/CadastroContainer";
import styles from './styles.module.scss'
import tenisEsq from '../../assets/images/tenisCadastroEsq.png'
import tenisDir from '../../assets/images/tenisCadastroDir.png'
export default function Cadastro(){
    return(
        <div className={styles.containerCadastro}>
            <CadastroContainer/>
            <img src={tenisEsq} alt='tenis esquerdo' className={styles.imgTenisEsq}/>
            <img src={tenisDir} alt='tenis esquerdo' className={styles.imgTenisDir}/>
        </div>
    )
}