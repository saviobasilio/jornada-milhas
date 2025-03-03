import { UnidadeFederativa } from "./unidadeFederativa"

export interface Promocao{
    id: number
    destino: string
    imagem: string
    preco: number
}

export interface PessoaUsuaria 
{
    nome: string,
    nascimento: string,
    cpf: string,
    telefone: string,
    email: string,
    senha: string,
    genero: string,
    cidade: string,
    estado: UnidadeFederativa
}

export interface Resultado {
    paginaAtual: number;
    ultimaPagina: number;
    total: number;
    precoMin: number;
    precoMax: number;
    resultado: Passagem[];   
}

export interface Passagem {
    tipo: string;
    precoIda: number;
    precoVolta: number;
    taxaEmbarque: number;
    conexoes: number;
    tempoVoo: number;
    origem: UnidadeFederativa;
    destino: UnidadeFederativa;
    companhia: Companhia;
    dataIda: Date;
    dataVolta: Date;
    total: number;
    orcamento: Orcamento[];
}

export interface Companhia{
    id: string;
    nome: string;
}

export interface Orcamento{
    descricao: string;
    preco: number;
    taxaEmbarque: number;
    total: number
}