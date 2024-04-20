function btnEnviar() {
    var dataInput = document.getElementById("data").value;
    var qtdCaesPequenos = parseInt(document.getElementById("caes-pequenos").value);
    var qtdCaesGrandes = parseInt(document.getElementById("caes-grandes").value);

    var data = new Date(dataInput);
    var diaDaSemana = data.getDay() + 1;

    var isFinalDeSemana = (diaDaSemana >= 1 && diaDaSemana <= 5);

    var petshops = [
        {
            nome: "Meu Canino Feliz",
            distancia: 2.0,
            vlrPequeno: isFinalDeSemana ? 20 : 20 * 1.2,
            vlrGrande: isFinalDeSemana ? 40 : 40 * 1.2
        },
        {
            nome: "Vai Rex",
            distancia: 1.7,
            vlrPequeno: isFinalDeSemana ? 15 : 20,
            vlrGrande: isFinalDeSemana ? 50 : 55
        },
        {
            nome: "ChowChawgas",
            distancia: 0.8,
            vlrPequeno: isFinalDeSemana ? 30 : 30,
            vlrGrande: isFinalDeSemana ? 45 : 45
        }
    ];

    var resultados = petshops.map(petshop => {
        var custoTotal = (petshop.vlrPequeno * qtdCaesPequenos) + (petshop.vlrGrande * qtdCaesGrandes);
        return { nome: petshop.nome, custoTotal: custoTotal, distancia: petshop.distancia };
    });

    var melhorPetshop = resultados.reduce((melhor, atual) => {
        if (atual.custoTotal < melhor.custoTotal) {
            return atual;
        } else if (atual.custoTotal === melhor.custoTotal) {
            return atual.distancia < melhor.distancia ? atual : melhor;
        }
        return melhor;
    });

    document.getElementById("resultadoMelhor").innerHTML = `O melhor petshop é ${melhorPetshop.nome} com o preço total de R$ ${melhorPetshop.custoTotal.toFixed(2)}!`;
    verificaCampos(dataInput, qtdCaesPequenos, qtdCaesGrandes);
}

function verificaCampos(dataInput, qtdCaesPequenos, qtdCaesGrandes) {
    if (dataInput === '' || isNaN(qtdCaesPequenos) || isNaN(qtdCaesGrandes)) {
        document.getElementById("resultadoMelhor").innerHTML = "Preencha os campos para obter a informação do melhor PetShop custo-benefício."
    }
}


