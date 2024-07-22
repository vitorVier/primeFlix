import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import './favoritos.css';

export default function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@primeFlix');

        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    
    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('@primeFlix', JSON.stringify(filtroFilmes));
        toast.success('Filme excluído com sucesso!')
    }


    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <article key={item.id}>
                            <span>{item.title}</span>
                            <section>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                                <div>
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button id='exlcuir' onClick={() => excluirFilme(item.id)}>Excluir</button>
                                </div>
                            </section>  
                        </article>
                    );
                })}
            </ul>
        </div>
    )
}