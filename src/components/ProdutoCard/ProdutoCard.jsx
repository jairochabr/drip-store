import './ProdutoCard.css'
import sapatoCard from '../../assets/HomeFotos/SapatoCard.png'

export const ProdutoCard = () => {

    const produtos = [
        {
            id: 1,
            nome: "K-Swiss V8 - Masculino",
            categoria: "Tênis",
            precoAntigo: 200,
            precoNovo: 100,
            desconto: "30% OFF",
            imagem: sapatoCard
          },
          {
            id: 2,
            nome: "K-Swiss V8 - Masculino",
            categoria: "Tênis",
            precoAntigo: 200,
            precoNovo: 100,
            desconto: "30% OFF",
            imagem: sapatoCard
          },
          {
            id: 3,
            nome: "K-Swiss V8 - Masculino",
            categoria: "Tênis",
            precoAntigo: 200,
            precoNovo: 100,
            imagem: sapatoCard
          },
          {
            id: 4,
            nome: "K-Swiss V8 - Masculino",
            categoria: "Tênis",
            precoAntigo: 200,
            precoNovo: 100,
            imagem: sapatoCard
          },
          {
            id: 5,
            nome: "K-Swiss V8 - Masculino",
            categoria: "Tênis",
            precoAntigo: 200,
            precoNovo: 100,
            imagem: sapatoCard
          },
          {
            id: 6,
            nome: "K-Swiss V8 - Masculino",
            categoria: "Tênis",
            precoAntigo: 200,
            precoNovo: 100,
            imagem: sapatoCard
          },
          {
            id: 7,
            nome: "K-Swiss V8 - Masculino",
            categoria: "Tênis",
            precoAntigo: 200,
            precoNovo: 100,
            imagem: sapatoCard
          },
          {
            id: 8,
            nome: "K-Swiss V8 - Masculino",
            categoria: "Tênis",
            precoAntigo: 200,
            precoNovo: 100,
            imagem: sapatoCard
          }
        ];

        const ProdutoCard = ({ nome, categoria, precoAntigo, precoNovo, desconto, imagem }) => (
          <div className="produto">
            {desconto && <div className="desconto">{desconto}</div>}
            <img src={imagem} alt={nome} className="produto-imagem" />
            <p className="categoria">{categoria}</p>
            <p className="nome">{nome}</p>
            <p className="preco-antigo">${precoAntigo}</p>
            <p className="preco-novo">${precoNovo}</p>
          </div>
        );
    return ( 
        <>
            <div className="produtos">
              {produtos.map((produto) => (
                <ProdutoCard
                  key={produto.id}
                  nome={produto.nome}
                  categoria={produto.categoria}
                  precoAntigo={produto.precoAntigo}
                  precoNovo={produto.precoNovo}
                  desconto={produto.desconto}
                  imagem={produto.imagem}
                />
              ))} 
            </div>
        </>
     );
}