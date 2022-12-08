<<<<<<< HEAD
import styles from './styles.module.scss';
export default function Botao(props){
    return(
        <button className={styles.botao} style={{backgroundColor:props.corFundo,width:props.largura,color:props.cor,height:props.altura}} >
             {props.texto}
        </button>
    )
}
=======
import styles from "./styles.module.scss";
export default function Botao(props) {
	return (
		<button
			className={styles.botao}
			style={{
				backgroundColor: props.corFundo,
				width: props.largura,
				color: props.cor,
			}}
		>
			{props.texto}
		</button>
	);
}
>>>>>>> 2dc9653090fc8667a01f5bb16f1cdc324d8e71d2
