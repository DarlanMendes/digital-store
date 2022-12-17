import styles from './styles.module.scss';
export default function Botao(props){
    return(
        <button className={styles.botao} style={{backgroundColor:props.corFundo,width:props.largura,color:props.cor,height:props.altura}} >
             {props.texto}
        </button>
    )
}
