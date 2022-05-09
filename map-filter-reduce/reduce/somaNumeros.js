function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, current) => prev + current);

	return soma;
}

console.log('Soma = ',somaNumeros([1, 1, 1, 3]));