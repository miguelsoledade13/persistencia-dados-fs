import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';

//models
type livro = {
    titulo: string;
    autor: string;
    genero?: string;
    ano: number;
    lido: boolean;
};

type Hobby = string;

type FamosoFavorito = {
    nome: string;
    ondeconheci: string;
    hobbies: Hobby[];
    famososFavoritos: FamosoFavorito[];
};


//Manipulação de arquivos JSON

//1. Função para adicionar um livro ao arquivo JSON
const livros: livro[] = [];

livros.push({
    titulo: 'Phantom Blood',
    autor: 'Hirohiko Araki',
    genero: 'ação, aventura, fantasia',
    ano: 1986,
    lido: true,
});

livros.push({
    titulo: 'Steel Ball Run',
    autor: 'Hirohiko Araki',
    genero: 'ação, aventura, faroeste, corrida',
    ano: 2004,
    lido: false,
});

livros.push({
    titulo: 'Golden Wind',
    autor: 'Hirohiko Araki',
    genero: 'ação, aventura, drama, crime',
    ano: 1995,
    lido: false,
});


//2. Percorrer o array (Lista) de livros e imprimir os títulos

livros.forEach((livro) => {
    console.log(`Título: ${livro.titulo} (${livro.ano})\n Autor: ${livro.autor}\nGênero: ${livro.genero}\nLido: ${livro.lido ? 'Sim' : 'Não'}\n`);
});

//3. Filtrar a lista (ex: Apenas os livros lidos)
const livroslidos = livros.filter((livro) => livro.lido === true);

//4. Encontrar um livro científico específico (ex: "Phantom Blood")
const livroEncontrado = livros.find((livro) => livro.titulo === 'Phantom Blood');

// Salvar no disco (em um arquivo JSON)
const diretorio = 'data';
if (!existsSync(diretorio)) {
    mkdirSync(diretorio);
}

writeFileSync(`${diretorio}/livros.json`, JSON.stringify(livros, null, 2), `utf-8`);
//Os parâmetros null, 2 servem para identar e deixar  visualmente legível.

//6. Ler do disco (de um arquivo JSON).
const livrosLidosDoArquivo: livro[] = JSON.parse(readFileSync(`${diretorio}/livros.json`, `utf-8`));
console.log("Livros lidos do arquivo JSON:", livrosLidosDoArquivo);