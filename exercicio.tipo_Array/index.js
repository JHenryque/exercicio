let carro = {
    extras: ['ar-condicionado','freio abs','banco coro'],
    motoDesligado: false,
    velocidade: 0,
    ligarMotor: function () {
       this.motoDesligado = true
    },
    aceleara: function (acelera) {
        this.velocidade += acelera
    },
    freia: function () {
        this.velocidade = 0
    }
}

carro.ligarMotor()
console.log('Carro Ligado: ' + carro.motoDesligado)
`${carro.aceleara(150)} Km`
console.log('velocidade: ' + carro.velocidade )
