import styles from './styles.module.scss';
export default function Botao(props){
    return(
        <button className={styles.botao} style={{backgroundColor:props.cor,width:props.largura}} >
             {props.texto}
        </button>
    )
}