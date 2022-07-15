const notas =[10,9,8,7,6]

// atualizando com +1 ponto em notas menores que 10 usando a funcao map

const notasAtualizadas = notas.map(nota => nota ==10? nota : ++ nota)

console.log(notasAtualizadas)