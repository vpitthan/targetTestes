const fs = require('fs');

function calcularFaturamento() {
    fs.readFile('faturamento.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        const faturamento = JSON.parse(data).faturamento;

        const valores = faturamento.map(dia => dia.valor).filter(valor => valor > 0);

        const menorFaturamento = Math.min(...valores);
        const maiorFaturamento = Math.max(...valores);

        const somaFaturamento = valores.reduce((acc, valor) => acc + valor, 0);
        const mediaFaturamento = somaFaturamento / valores.length;

        const diasAcimaDaMedia = valores.filter(valor => valor > mediaFaturamento).length;

        console.log(`Menor faturamento: R$ ${menorFaturamento}`);
        console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
        console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
    });
}

calcularFaturamento();