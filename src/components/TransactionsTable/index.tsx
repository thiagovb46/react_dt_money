import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";



export function TransactionTable()
{
    useEffect(()=>{
        api.get('transactions');
    },[])
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                         <th>Título</th>
                         <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit"> R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr >
                        <td>Aluguel</td>
                        <td className="withdraw"> -R$ 1.100,00</td>
                        <td>Despesa</td>
                        <td>17/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>

            </Container>
       
        );
}