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