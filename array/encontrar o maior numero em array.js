function maiorNmr(array)
{
    return array.reduce(function(max, atual)
    {
        return atual > max ? atual : max;
    });
}

let numeros = [10, 25, 35, 5, 40, 20];
let maior = maiorNmr(numeros);
console.log(maior);