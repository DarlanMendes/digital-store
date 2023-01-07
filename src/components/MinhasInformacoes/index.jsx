import styles from './styles.module.scss'

export default function MinhasInformacoes() {
    return (<div className={styles.minhasInformacoesContainer}>
        <div className={styles.titulo}>
            <h2> Minhas informações</h2> <span>Editar</span>
        </div>
        <hr />
        <div className={styles.infoPessoais}>
            <h3>Informações Pessoais</h3>
            <div className={styles.subContainerInfoPessoais}>
                <h4>
                    Nome:
                </h4>
                <span>
                    Francisco Antonio Pereira
                </span>
            </div>
            <div className={styles.subContainerInfoPessoais}>
                <h4>
                    CPF:
                </h4>
                <span>
                    12345678912-35
                </span>
            </div>
            <div className={styles.subContainerInfoPessoais}>
                <h4>
                    Email:
                </h4>
                <span>
                    francisco@gmail.com
                </span>
            </div>
            <div className={styles.subContainerInfoPessoais}>
                <h4>
                    Celular:
                </h4>
                <span>
                    (85)5555-5555
                </span>
            </div>
        </div>
        <hr />
        <div className={styles.infoPessoais}>
            <h3>Informações de Entrega</h3>
            <div className={styles.subContainerInfoPessoais}>
                <h4>
                    Endereço:
                </h4>
                <span>
                    Rua João Pessoa, 333
                </span>
            </div>
            <div className={styles.subContainerInfoPessoais}>
                <h4>
                    Bairro:
                </h4>
                <span>
                    Centro
                </span>
            </div>
            <div className={styles.subContainerInfoPessoais}>
                <h4>
                    Cidade:
                </h4>
                <span>
                    Fortaleza, Ceará
                </span>
            </div>
            <div className={styles.subContainerInfoPessoais}>
                <h4>
                    CEP:
                </h4>
                <span>
                    433-8800
                </span>
            </div>
        </div>
    </div>)
}