import styles from './styles.module.scss';
export default function DestaqueDesconto(props){
    return(
        <div className={styles.descontoContainer}>
            {props.texto}
        </div>

    )
}