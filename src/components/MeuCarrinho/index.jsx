import estilo from './styles.module.scss'
import tenis from './assets/White-Sneakers-PNG-Clipart 2.png'
import Botao from '../../components/Botao'

export default function MeusPedidos() {
    return (<div>
        <div className={estilo.container}>
            <div className={estilo.carrinho}>
                <div className={estilo.nomes}>
                    <div className={estilo.titulo}>
                        MEU CARRINHO
                    </div>
                    <div className={estilo.subtitulos}>
                        <div className={estilo.subQuantidade}>
                            QUANTIDADE
                        </div>
                        <div className={estilo.subUnitário}>
                            UNITÁRIO
                        </div>
                        <div className={estilo.subTotal}>
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
                            <p className={estilo.removerItem}>Remover item</p>
                        </div>
                        <div className={estilo.unidades}>
                            <div className={estilo.normalPrice}>
                                R$ 219,00
                            </div>
                            <div className={estilo.discountPrice}>
                                R$ 219,00
                            </div>
                        </div>
                        <div className={estilo.total}>
                            <div className={estilo.normalPrice}>
                                R$ 219,00
                            </div>
                            <div className={estilo.discountPrice}>
                                R$ 219,00
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={estilo.informacoesAdicionais}>
                    <div className={estilo.desconto}>
                        <label htmlFor="">Cupom de desconto</label>
                        <div>
                            <input type="text" name="" id="" placeholder="Insira seu codigo" /> <Botao cor={'#C92071'} corFundo={'#F5F5F5'} largura={'114px'} altura={'60px'} texto={'OK'} />
                        </div>
                    </div>
                    <div className={estilo.frete}>
                        <label htmlFor="">Calcular frete</label>
                        <div>
                            <input type="text" name="" id="" placeholder="Insira seu CEP" /> <Botao cor={'#C92071'} corFundo={'#F5F5F5'} largura={'114px'} altura={'60px'} texto={'OK'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={estilo.containerGeralMobile}>

            <div className={estilo.containerMobile}>
                <div className={estilo.carrinhoMobile}>
                    <div className={estilo.titulo}>
                        MEU CARRINHO
                    </div>
                    <hr />
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
                    <div className={estilo.subQuantidade}>
                        QUANTIDADE
                    </div>
                    <div className={estilo.quantidade}>
                        <div className={estilo.botoes}>
                            <button> - </button>
                            <p>1</p>
                            <button> + </button>
                        </div>
                        <p className={estilo.removerItem}>Remover item</p>
                    </div>
                    <div className={estilo.informacaoPedidos}>
                        <div className={estilo.unidades}>
                            <div className={estilo.subUnitario}>
                                UNITÁRIO
                            </div>
                            <div className={estilo.normalPrice}>
                                R$ 219,00
                            </div>
                            <div className={estilo.discountPrice}>
                                R$ 219,00
                            </div>
                        </div>
                        <div className={estilo.total}>
                            <div className={estilo.subTotal}>
                                TOTAL
                            </div>
                            <div className={estilo.normalPrice}>
                                R$ 219,00
                            </div>
                            <div className={estilo.discountPrice}>
                                R$ 219,00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className={estilo.containerDescontoMobile}>
                    <div className={estilo.descontoMobile}>
                        <label htmlFor="">Cupom de desconto</label>
                        <div>
                            <input type="text" name="" id="" placeholder="Insira seu codigo" /> <Botao cor={'#C92071'} corFundo={'#F5F5F5'} largura={'255px'} altura={'60px'} texto={'OK'} />
                        </div>
                    </div>
                </div>
                <div className={estilo.containerFreteMobile}>
                    <div className={estilo.freteMobile}>
                        <label htmlFor="">Calcular frete</label>
                        <div>
                            <input type="text" name="" id="" placeholder="Insira seu CEP" /> 
                            <Botao cor={'#C92071'} corFundo={'#F5F5F5'} largura={'255px'} altura={'60px'} texto={'OK'} />
                        </div>
                    </div>
                </div>
        </div>
    </div>)
}