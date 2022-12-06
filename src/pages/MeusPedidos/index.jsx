import estilo from './styles.module.scss'
import tenis from './assets/White-Sneakers-PNG-Clipart 2.png'

export default function MeusPedidos() {
    return (<div>
        <div className={estilo.container}>
            <div className={estilo.carrinho}>
                <div className={estilo.nomes}>
                    <div className={estilo.titulo}>
                        MEU CARRINHO
                    </div>
                    <div className={estilo.subtitulos}>
                        <div>
                            QUANTIDADE
                        </div>
                        <div>
                            UNITÁRIO
                        </div>
                        <div>
                            TOTAL
                        </div>

                    </div>
                </div>
                <hr />
                <div className={estilo.fileirasProdutos}>
                    <div className={estilo.idProduto}>
                        <div className={estilo.imagemProduto}>
                            <img src={tenis} alt="" />
                        </div>
                        <div className={estilo.especificacoesProduto}>
                            <div className={estilo.nomeProduto}>
                                Tênis Nike Revolution 6 Next Nature Masculino
                            </div>
                            <div className={estilo.corProduto}>
                                <label>Cor:</label> Vermelho / Branco
                            </div>
                            <div className={estilo.especProduto}>
                                <label>Tamanho:</label> 42
                            </div>
                        </div>
                    </div>
                    <div className={estilo.informacaoPedidos}>
                        <div className={estilo.quantidade}>
                            <div className={estilo.botoes}>
                                <button> - </button>
                                <p>1</p>
                                <button> + </button>
                            </div>
                            <a>Remover item</a>
                        </div>
                        <div className={estilo.unidades}>unitário</div>
                        <div className={estilo.total}>Total</div>
                    </div>
                </div>
                <div>
                    informacoes adicionais
                </div>
            </div>
        </div>
    </div>)
}