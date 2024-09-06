const nomes = ["PetrolHead", "Alemão da Caravan", "ACF"]

export function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
