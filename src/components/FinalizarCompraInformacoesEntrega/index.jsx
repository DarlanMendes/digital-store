import estilo from './styles.module.scss'

export default function ProdutoHome() {
    return (
        <div className={estilo.container}>
            <div className={estilo.titulo}>
                Informações de Entrega
            </div>
            <hr />
            <div className={estilo.informacoes}>
                <div className={estilo.endereco}>
                    <div className={estilo.tituloEndereco}>
                        Endereço *
                    </div>
                    <input type="text" placeholder='Insira seu endereco' />
                </div>
                <div className={estilo.bairro}>
                    <div className={estilo.tituloBairro}>
                        Bairro *
                    </div>
                    <input type="text" placeholder='Insira seu bairro' />
                </div>
                <div className={estilo.cidade}>
                    <div className={estilo.tituloCidade}>
                        Cidade *
                    </div>
                    <input type="text" placeholder='Insira sua cidade' />
                </div>
                <div className={estilo.cep}>
                    <div className={estilo.tituloCep}>
                        CEP *
                    </div>
                    <input type="text" placeholder='Insira seu CEP' />
                </div>
                <div className={estilo.complemento}>
                    <div className={estilo.tituloComplemento}>
                        Complemento
                    </div>
                    <input type="text" placeholder='Insira complemento' />
                </div>
            </div>
        </div>

    )
}

