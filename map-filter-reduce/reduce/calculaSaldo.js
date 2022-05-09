function calculaSaldo(saldo, itens) {
    if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

    const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);
    if (saldoFinal < 0) {
        const saldoBaixo = saldo + (1 + saldoFinal - saldoFinal);
        return `O saldo insuficiente precisa de ${saldoBaixo} reais e seu saldo é ${saldo} reais`;
    }
    return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
    {
        preco: 2,
        nome: 'maçã',
    },
    {
        preco: 30,
        nome: 'roupa',
    },
    {
        preco: 25,
        nome: 'toalha',
    },
    {
        preco: 125,
        nome: 'sapato',
    },
    {
        preco: 150,
        nome: 'relogio',
    },
];

saldo = 331;

console.log(calculaSaldo(saldo, lista));