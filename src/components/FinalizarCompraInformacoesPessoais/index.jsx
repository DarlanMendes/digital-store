import estilo from './styles.module.scss'

export default function ProdutoHome() {
    return (
        <div className={estilo.container}>
            <div className={estilo.titulo}>
                Informações Pessoais
            </div>
            <hr />
            <div className={estilo.informacoes}>
                <div className={estilo.nome}>
                    <div className={estilo.tituloNome}>
                        Nome Completo *
                    </div>
                    <input type="text" placeholder='Insira seu nome'/>
                </div>
                <div className={estilo.cpf}>
                    <div className={estilo.tituloCpf}>
                        CPF *
                    </div>
                    <input type="text" placeholder='Insira seu CPF'/>
                </div>
                <div className={estilo.email}>
                    <div className={estilo.tituloEmail}>
                        E-mail *
                    </div>
                    <input type="text" placeholder='Insira seu email'/>
                </div>
                <div className={estilo.celular}>
                    <div className={estilo.tituloCelular}>
                        Celular *
                    </div>
                    <input type="text" placeholder='Insira seu celular'/>
                </div>
            </div>
        </div>

    )
}

