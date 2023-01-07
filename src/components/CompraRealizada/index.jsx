import estilo from './styles.module.scss'
import Botao from '../../components/Botao'
import img from './assets/confete.png'
import imgTenis from './assets/White-Sneakers-PNG-Clipart 2.svg'
import { Link } from 'react-router-dom'

export default function FinalizarCompra() {
    return (
        <div className={estilo.container}>
            <div className={estilo.containerCompra}>

                <div className={estilo.titulo}>
                    <div className={estilo.emoji}>
                        <img src={img} alt="" />
                    </div>
                    <div className={estilo.texto}>
                        Compra Realizada com sucesso!
                    </div>
                </div>
                <hr />
                <div className={estilo.informacoesPessoais}>
                    <div className={estilo.tituloInfPessoais}>
                        Informações Pessoais
                    </div>
                    <div className={estilo.nome}>
                        <label>Nome:</label>
                        <p>
                            Francisco Antonio Pereira
                        </p>
                    </div>
                    <div className={estilo.cpf}>
                        <label>CPF:</label>
                        <p>
                            123485913-35
                        </p>

                    </div>
                    <div className={estilo.email}>
                        <label>Email:</label>
                        <p>
                            francisco@gmail.com
                        </p>

                    </div>
                    <div className={estilo.celular}>
                        <label>Celular:</label>
                        <p>
                            (85) 5555-5555
                        </p>
                    </div>
                </div>
                <hr />
                <div className={estilo.informacoesDeEntrega}>
                    <div className={estilo.tituloEntrega}>
                        Informações de Entrega
                    </div>
                    <div className={estilo.endereco}>
                        <label>Endereço:</label>
                        <p>
                            Rua João Pessoa, 333
                        </p>
                    </div>
                    <div className={estilo.bairro}>
                        <label>Bairro:</label>
                        <p>
                            Centro
                        </p>
                    </div>
                    <div className={estilo.cidade}>
                        <label>Cidade:</label>
                        <p>
                            Fortaleza, Ceará
                        </p>
                    </div>
                    <div className={estilo.cep}>
                        <label>CEP:</label>
                        <p>
                            433-8800
                        </p>
                    </div>
                </div>
                <hr />
                <div className={estilo.informacoesDePagamento}>
                    <div className={estilo.tituloPagamento}>
                        Informações de Pagamento
                    </div>
                    <div className={estilo.tituarCrt}>
                        <label>Titular do Cartão:</label>
                        <p>
                            FRANCISCO A P
                        </p>
                    </div>
                    <div className={estilo.finalCrt}>
                        <label>Final:</label>
                        <p>
                            ************2020
                        </p>
                    </div>
                </div>
                <hr />
                <div className={estilo.resumoDaCompra}>
                    <div className={estilo.tituloResumo}>
                        Resumo da compra
                    </div>
                    <div className={estilo.produtos}>
                        <div className={estilo.imgProduto}>
                            <img src={imgTenis} />
                        </div>
                        <div className={estilo.nomeProduto}>
                            Tênis Nike Revolution 6 Next Nature Masculino
                        </div>
                    </div>
                    <div className={estilo.total}>
                        <div className={estilo.divValor}>
                            <div className={estilo.tituloTotal}>
                                Total
                            </div>
                            <div className={estilo.valor}>
                                R$ 219,00
                            </div>
                        </div>
                        <div className={estilo.parcelamento}>
                            ou 10x de R$ 21,00 sem juros
                        </div>
                    </div>
                    <div className={estilo.recibo}>
                        <a href="">Imprimir Recibo</a>
                    </div>
                </div>
            </div>
            <Link to='/'>
                <div className={estilo.botao}>
                    <Botao cor={'#F5F5F5'} corFundo={'#F6AA1C'} largura={'100%'} altura={'50px'} texto={'Voltar para Home'} />
                </div>

            </Link>
        </div>

    )
}

