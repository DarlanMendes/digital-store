import estilo from './styles.module.scss'
import Filtrar from '../../components/MenuFiltrar'
import Produtos from '../../components/ProdutoCard'
import Ordenar from '../../components/MenuOrdenar'
import { useEffect,useState,useContext } from 'react'
import { SearchContext } from '../../App'
export default function ProdutoHome() {
    const [produtos, setProdutos]=useState()
    const search = useContext(SearchContext)
    useEffect(()=>{
         async function busca(){
          // let produtosjson= await fetch("https://dripstore-back.onrender.com/produtos")
          // let produtobuscado = await produtosjson.json()
           
         }
        fetch("https://dripstore-back.onrender.com/produtos").then(res=>res.json()).then(data=>{
            let productFilted = data.filter(product=>product.descricao.includes(search.search))
            console.log(productFilted)
           setProdutos(productFilted)
        }
         
        )
    },[search.search])
   
    return (
        <div className={estilo.teste}>
            <div className={estilo.container}>
                <div className={estilo.Ordenar}>
                    <Ordenar />
                </div>
                <div className={estilo.containerProdutos}>
                    <div className={estilo.menuFiltrar}>
                        <Filtrar />
                    </div>
                    <div className={estilo.produtos}>
                        
                        {produtos?.map((produto)=>(
                            
                              <Produtos key={produto.id} produto={produto}/>
                            
                        ))}
                      
                       
                    </div>

                </div>
            </div>
        </div>
    )
}