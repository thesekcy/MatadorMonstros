new Vue({
    el: '#app',
    data: {
        widthPlayer: 100,
        widthMonstro: 100,
        btnsGame: false,
        btnComecar: true,
        danoPlayer: 0,
        danoMonstro: 0,
        curaPlayer: 0,
        finalGame: false,
        menssagemFinal: 'O jogo acabou',
        desativarBotao: false,
        desistirText: 'Desistir',
        cura: 3,
        especial: 3,
    },
    methods: {
        funcAtacar() {
            this.danoMonstro = Math.floor(Math.random() * 11) + 7;
            this.danoPlayer = Math.floor(Math.random() * 8) + 7;
            this.widthPlayer -= this.danoMonstro;
            this.widthMonstro -= this.danoPlayer;
            //console.log("player: " + this.danoPlayer + " monstro: " + this.danoMonstro)
            this.verificaJogo();
        },
        ataqueEspecial() {
            if (this.especial > 0) {
                this.danoMonstro = Math.floor(Math.random() * 11) + 7;
                this.danoPlayer = Math.floor(Math.random() * 13) + 10;
                this.widthPlayer -= this.danoMonstro;
                this.widthMonstro -= this.danoPlayer;
                //console.log("player: " + this.danoPlayer + " monstro: " + this.danoMonstro)
                this.verificaJogo();
            } else {
                alert("Você não tem mais ataques especiais.");
            }
        },
        funcCurar() {
            if (this.cura > 0) {
                this.danoMonstro = Math.floor(Math.random() * 11) + 7;
                this.curaPlayer = Math.floor(Math.random() * 12) + 9;
                this.widthPlayer += this.curaPlayer;
                this.widthPlayer -= this.danoMonstro;
                //this.widthMonstro -= this.danoPlayer;
                //console.log("player: +" + this.curaPlayer + " monstro: " + this.danoMonstro)
                this.verificaJogo();
            } else {
                alert("Você não pode mais curar.");
            }
        },
        verificaJogo() {
            if (this.widthMonstro <= 0 && this.widthPlayer <= 0) {
                this.widthMonstro = 0;
                this.widthPlayer = 0;
                this.menssagemFinal = "Empate, Jogador e Monstro ficaram com 0 de vida.";
                this.finalGame = true;
                this.desistirText = 'Voltar ao Menu';
                this.desativarBotao = true;

            } else if (this.widthMonstro <= 0) {
                this.widthMonstro = 0;
                this.menssagemFinal = "Vitoria do Jogador, o Monstro ficou com 0 de vida.";
                this.finalGame = true;
                this.desistirText = 'Voltar ao Menu';
                this.desativarBotao = true;
            }
            else if (this.widthPlayer <= 0) {
                this.widthPlayer = 0;
                this.menssagemFinal = "Vitoria do Monstro, o Jogador ficou com 0 de vida.";
                this.finalGame = true;
                this.desistirText = 'Voltar ao Menu';
                this.desativarBotao = true;
            }
        },
        desistirGame() {
            this.widthPlayer = 100;
            this.widthMonstro = 100;
            this.btnsGame = false;
            this.btnComecar = true;
            this.danoPlayer = 0;
            this.danoMonstro = 0;
            this.curaPlayer = 0;
            this.finalGame = false;
            this.menssagemFinal = 'O jogo acabou';
            this.desativarBotao = false;
            this.desistirText = 'Desistir';
        },
    },
});
