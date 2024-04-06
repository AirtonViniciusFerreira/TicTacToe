const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        options: ['X', 'O'],
        turn_index: 0,

        change: function () {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    gameover: false,
    winning_sequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    animation: null,

    player1: {
        element: null,
        name: '',
        turn_index: 0,
        visible: false,

        init: function (container) {
            this.element = container
            this.visible = !this.element.classList.contains('hidden');
        },

        view: function () {
            if (this.visible) return false;

            this.element.classList.remove('hidden');
            this.visible = true;
            return true;
        },

        hidden: function () {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        }
    },

    player2: {
        element: null,
        name: '',
        turn_index: 1,
        visible: false,

        init: function (container) {
            this.element = container
            this.visible = !this.element.classList.contains('hidden');
        },

        view: function () {
            if (this.visible) return false;

            this.element.classList.remove('hidden');
            this.visible = true;
            return true;
        },

        hidden: function () {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        }
    },

    container_element: {
        element: null,
        visible: false,

        init: function (container) {
            this.element = container
            this.visible = !this.element.classList.contains('hidden');
        },

        view: function () {
            if (this.visible) return false;

            this.element.classList.remove('hidden');
            this.visible = true;
            return true;
        },

        hidden: function () {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        }
    },
    container_game: {
        element: null,
        visible: false,

        init: function (container) {
            this.element = container
            this.visible = !this.element.classList.contains('hidden');
        },

        view: function () {
            if (this.visible) return false;

            this.element.classList.remove('hidden');
            this.visible = true;
            return true;
        },

        hidden: function () {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        },

        winner: function (winning_sequences) {
            console.log(winning_sequences);
            this.element.children.item(winning_sequences[0]).classList.add('winner');
            this.element.children.item(winning_sequences[1]).classList.add('winner');
            this.element.children.item(winning_sequences[2]).classList.add('winner');
        },

        old: function () {
            this.element.children.item(0).classList.add('old');
            this.element.children.item(1).classList.add('old');
            this.element.children.item(2).classList.add('old');
            this.element.children.item(3).classList.add('old');
            this.element.children.item(4).classList.add('old');
            this.element.children.item(5).classList.add('old');
            this.element.children.item(6).classList.add('old');
            this.element.children.item(7).classList.add('old');
            this.element.children.item(8).classList.add('old');
        }
    },
    container_atction: {
        element: null,
        visible: false,

        init: function (container) {
            this.element = container
            this.visible = !this.element.classList.contains('hidden');
        },

        view: function () {
            if (this.visible) return false;

            this.element.classList.remove('hidden');
            this.visible = true;
            return true;
        },

        hidden: function () {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        }
    },
    container_player: {
        element: null,
        visible: false,
        element_player1: null,
        elemnt_player2: null,

        init: function (container) {
            this.element = container
            this.element_player1 = this.element.children.item(0);
            this.element_player2 = this.element.children.item(1);
            this.visible = !this.element.classList.contains('hidden');
        },

        view: function () {
            if (this.visible) return false;

            this.element.classList.remove('hidden');
            this.visible = true;
            return true;
        },

        hidden: function () {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        },

        define_player1: function (name, simbol) {
            this.element_player1.innerHTML = `${tic_tac_toe.utilHtml.inserirParagrafo('Jogador 1:')} ${tic_tac_toe.utilHtml.inserirParagrafo(name)} ${tic_tac_toe.utilHtml.inserirParagrafo(simbol)}`;
        },

        define_player2: function (name, simbol) {
            this.element_player2.innerHTML = `${tic_tac_toe.utilHtml.inserirParagrafo('Jogador 2:')} ${tic_tac_toe.utilHtml.inserirParagrafo(name)} ${tic_tac_toe.utilHtml.inserirParagrafo(simbol)}`;
        },
    },
    btn_start: {
        element: null,
        visible: false,

        init: function (container) {
            this.element = container
            this.visible = !this.element.classList.contains('hidden');
        },

        view: function () {
            if (this.visible) return false;

            this.element.classList.remove('hidden');
            this.visible = true;
            return true;
        },

        hidden: function () {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        }
    },
    btn_restar: {
        element: null,
        visible: false,

        init: function (container) {
            this.element = container
            this.visible = this.element.classList.contains('hidden');
        },

        view: function () {
            if (this.visible) return false;

            this.element.classList.remove('hidden');
            this.visible = true;
            return true;
        },

        hidden: function () {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        }
    },

    init: function (container) {
        this.container_element.init(container);
        this.container_game.init(container.querySelector('.game'));
        this.container_atction.init(container.querySelector('.actions'));
        this.container_player.init(container.querySelector('.player'));

        this.btn_start.init(this.container_atction.element.querySelector('.btn_start'));
        this.btn_restar.init(this.container_atction.element.querySelector('.btn_restart'));

        this.animation_init();
        // this.container_game.hidden();
        // this.container_player.hidden();
        this.btn_restar.hidden();
    },

    start: function () {
        this.animation_stop();
        this.board.fill('');
        this.draw();
        this.gameover = false;
        this.btn_start.hidden();
        this.btn_restar.view();
        this.container_game.view();
        this.container_player.view();
    },

    restart: function () {
        this.animation_stop();
        this.board.fill('');
        this.draw();
        this.gameover = false;
        this.btn_start.hidden();
        this.btn_restar.view();
        this.container_game.view();
        this.container_player.view();
    },

    make_play: function (position) {
        if (this.gameover) return false;
        if (this.board[position] !== '') return false;

        this.board[position] = this.simbols.options[this.simbols.turn_index];
        this.draw();
        let winning_sequences_index = this.check_winning_sequences(this.simbols.options[this.simbols.turn_index]);

        if (winning_sequences_index == -1) {
            if (!this.board.includes('')) {
                this.old();
                return true;
            }
            this.simbols.change();
            return true;
        }

        this.winner(winning_sequences_index, this.simbols.options[this.simbols.turn_index]);
        this.game_is_over();
        return true;
    },

    game_is_over: function () {
        this.gameover = true;
        alert("GAME OVER");
        this.btn_start.classList.remove('hidden');
        this.btn_restar.classList.add('hidden');
    },

    check_winning_sequences: function (simbol) {
        for (i in this.winning_sequences) {
            if (this.board[this.winning_sequences[i][0]] == simbol &&
                this.board[this.winning_sequences[i][1]] == simbol &&
                this.board[this.winning_sequences[i][2]] == simbol) {
                // console.log('Sequencia Vencedora: ', i);
                return i;
            }
        }
        return -1;
    },

    winner: function (winning_sequences_index, player) {
        this.container_game.winner(this.winning_sequences[winning_sequences_index]);
    },

    old: function () {
        this.container_game.old();
    },

    draw: function () {
        this.container_game.element.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.make_play('${index}')"> ${element} </div>`).reduce((content, current) => content + current);
    },

    define_players: function (name1, name2) {
        this.player1.name = name1;
        this.player1.turn_index = this.simbols.turn_index;

        this.player2.name = name2;
        this.player2.turn_index = (this.simbols.turn_index === 0 ? 1 : 0);

        this.container_player.view();
        this.container_player.define_player1(this.player1.name, this.simbols.options[this.player1.turn_index]);
        this.container_player.define_player2(this.player2.name, this.simbols.options[this.player2.turn_index]);
        return true;
    },

    animation_init: function () {
        if (this.define_players('Maquina', 'Computador')) {
            this.animation = setInterval(() => {
                let result = this.generate_move();
                if (result === 1 || result === 2) {
                    clearInterval(this.animation);
                    setTimeout(() => {
                        this.board.fill('');
                        this.draw();
                        this.animation_init();
                    }, 500);
                }
            }, 400);
        }
    },

    animation_stop: function () {
        clearInterval(this.animation);
        this.board.fill('');
        this.draw();
    },

    generate_move: function () {
        let move = Math.floor(Math.random() * this.board.length);
        if (this.board[move] !== '') return -1;

        this.board[move] = this.simbols.options[this.simbols.turn_index];
        this.draw();
        let winning_sequences_index = this.check_winning_sequences(this.simbols.options[this.simbols.turn_index]);

        if (winning_sequences_index == -1) {
            if (!this.board.includes('')) {
                this.old();
                return 2;
            }
            this.simbols.change();
            return 0;
        } else {
            this.winner(winning_sequences_index, this.simbols.options[this.simbols.turn_index]);
            return 1;
        }
    },

    utilHtml: {
        inserirParagrafo: function (texto, classe = null, estilo = null, id = null) {
            let p = `<p`
            if (id !== null) {
                p += ` id="${id}"`;
            }

            if (classe !== null) {
                p += ` class="${classe}"`;
            }

            if (estilo !== null) {
                p += ` style="${estilo}"`;
            }

            p += `> ${texto} </p>`;
            return p;
        }
    }
};