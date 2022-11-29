import tenis from './Images/tenis.png'
import './Fonts/Inter/Inter-Regular.ttf'

export default function Produtos() {
    const estiloProdutoGeral = {
        margin: "0 14px 40px 0"
    }
    const estiloContainerProdutos = {
        margin: "0 100px 0 0",
        display: "flex",
        flexDirection: "row"
    }
    const estiloContainer = {
        backgroundColor: "#f9f8fe",
    }
    const estiloContainerSecondario = {
        maxWidth: "1240px",
        margin: "0 100px"
    }
    const estiloImagemProduto = {
        boxSizing: "border-box",
        width: "292px",
        height: "321px",
        backgroundColor: "#FFFFFF",
        boxShadow: "6px 16px 30px rgba(105, 98, 98, 0.05)",
        borderRadius: "4px"
    }
    const estiloTipoProduto = {
        fontFamily: "Inter-Regular",
        fontSize: "12px",
        fontWeight: "400",
        marginTop: "18px"
    }
    const estiloNomeProduto = {
        fontSize: "24px",
        fontWeight: "400"
    }
    const estiloPrecoProduto = {
        fontSize: "24px",
        fontWeight: "700"
    }
    const estiloProduto = {
        display: "flex",
        flexDirection: "column",
    }
    const estiloFirsRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0 0 0 0px"
    }
    const FirstRow = {
        margin: "0 0 0 100px",
        maxWidth: "1240px"
    }
    const estilo = {
        display: "flex",
    };
    const estiloMenu = {
        display: "flex",
        margin: "0 28px 224px 0px",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        boxShadow: "6px 16px 30px rgba(105, 98, 98, 0.05)",
    };
    const estiloCheckbox = {
        margin: "30px",
        width: "308px",
        height: "720px",
        backgroundColor: "#FFFFFF",
    };
    return (
        <div id="container" style={estiloContainer} >
            <div style={estiloContainerSecondario}>
                <div style={FirstRow}>
                    <div style={estiloFirsRow}>
                        <div>
                            Resultados para "Tenis" - "" Produtos
                        </div>
                        <div>
                            Ordenar por:
                            <select name="Ordenar porL:" id="">
                                <option value="">Mais relevantes</option>
                                <option value="">Mais relevantes</option>
                                <option value="">Mais relevantes</option>
                                <option value="">Mais relevantes</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div style={estilo}>
                    <div style={estiloMenu}>
                        <div style={estiloCheckbox}>
                            <h5>Filtrar Por</h5>
                            <hr></hr>
                            <h5>Marka</h5>
                            <div>
                                <input type="checkbox" />Adiddas
                            </div>
                            <div>
                                <input type="checkbox" />Calenciaga
                            </div>
                            <div>
                                <input type="checkbox" />K-Swiss
                            </div>
                            <div>
                                <input type="checkbox" />Nike
                            </div>
                            <div>
                                <input type="checkbox" />Pulma
                            </div>
                            <h5>Categoria</h5>
                            <div>
                                <input type="checkbox" />Esporte e lazer
                            </div>
                            <div>
                                <input type="checkbox" />Casual
                            </div>
                            <div>
                                <input type="checkbox" />Utilitário
                            </div>
                            <div>
                                <input type="checkbox" />Corrida
                            </div>
                            <h5>Genero</h5>
                            <div>
                                <input type="checkbox" />Masculino
                            </div>
                            <div>
                                <input type="checkbox" />Feminino
                            </div>
                            <div>
                                <input type="checkbox" />Unisex
                            </div>
                            <h5>Estado</h5>
                            <div >
                                <input type="checkbox" style={{ border: "1px solid black" }} />Novo
                            </div>
                            <div>
                                <input type="checkbox" />Usado
                            </div>
                        </div>
                    </div>
                    <div style={estiloContainerProdutos}>
                        <div style={estiloProdutoGeral}>
                            <div style={estiloProduto}>
                                <div style={estiloImagemProduto}>
                                    <img src={tenis} alt="" />
                                </div>
                                <div style={estiloTipoProduto}>
                                    Tipo
                                </div>
                                <div style={estiloNomeProduto}>
                                    Nome do produto
                                </div>
                                <div style={estiloPrecoProduto}>
                                    R$ Preco
                                </div>
                            </div>
                        </div>
                        <div style={estiloProdutoGeral}>
                            <div style={estiloProduto}>
                                <div style={estiloImagemProduto}>
                                    <img src={tenis} alt="" />
                                </div>
                                <div style={estiloTipoProduto}>
                                    Tipo
                                </div>
                                <div style={estiloNomeProduto}>
                                    Nome do produto
                                </div>
                                <div style={estiloPrecoProduto}>
                                    R$ Preco
                                </div>
                            </div>
                        </div>
                        <div style={estiloProdutoGeral}>
                            <div style={estiloProduto}>
                                <div style={estiloImagemProduto}>
                                    <img src={tenis} alt="" />
                                </div>
                                <div style={estiloTipoProduto}>
                                    Tipo
                                </div>
                                <div style={estiloNomeProduto}>
                                    Nome do produto
                                </div>
                                <div style={estiloPrecoProduto}>
                                    R$ Preco
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}