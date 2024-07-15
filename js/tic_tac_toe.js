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

        /**
         * 
         * @param {HTMLElement} container 
         */
        init: function (container) {
            this.element = container;
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

        /**
         * 
         * @param {int[]} winning_sequences 
         */
        winner: function (winning_sequences) {
            winning_sequences
                .forEach(item => {
                    this.element
                        .children
                        .item(item)
                        .classList
                        .add('winner');        
                });
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
        element_players: [],

        init: function (container) {
            this.element = container;
            for (i = 1; i <= 2; i++)
            {
                const player = this.element
                    .querySelector(`#player${i}`);
                if (player != null) {
                    this.element_players
                        .push(player);
                }
            }
            
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

        define_player: function (name, simbol, playerPosition) {
            const player = this.element_players
                .find(
                    /**
                     * 
                     * @param {HTMLElement} player 
                     */
                    function (player) {
                        return player.id == `player${playerPosition}`;
                });
            player.innerHTML = `${tic_tac_toe.utilHtml.inserirParagrafo(`Jogador ${playerPosition}:`)} ${tic_tac_toe.utilHtml.inserirParagrafo(name)} ${tic_tac_toe.utilHtml.inserirParagrafo(simbol)}`;
        },
    },
    btn_start: {
        element: null,
        visible: false,

        init: function (container) {
            this.element = container;
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
    form_jogador_config: {
        element: null,
        visible: false,

        /**
         * 
         * @param {HTMLElement} container 
         */
        init: function(container){
            this.element = container;
            this.visible = !this.element.classList.contains("hidden");
        },

        /**
         * 
         * @returns boolean
         */
        view: function() {
            if (this.visible) return false;
            
            this.element.classList.remove('hidden');
            this.visible= true;
            return true;
        },

        /**
         * 
         * @returns boolean
         */
        hidden: function() {
            if (!this.visible) return false;

            this.element.classList.add('hidden');
            this.visible = false;
            return true;
        }

    },

    /**
     * 
     * @param {HTMLElement} container 
     */
    init: function (container) {
        this.container_element.init(container);
        this.container_game.init(container.querySelector('#game'));
        this.container_atction.init(container.querySelector('#actions'));
        this.container_player.init(container.querySelector('#player'));
        this.form_jogador_config.init(container.querySelector("#form_player_config"));

        this.btn_start.init(this.container_atction.element.querySelector('#btn_start'));
        this.btn_restar.init(this.container_atction.element.querySelector('#btn_restart'));

        this.animation_init();
        this.btn_restar.hidden();
    },

    select_player: function () {
        this.animation_stop();
        this.btn_start.hidden();
        this.form_jogador_config.view();
        this.container_game.hidden();
        this.container_player.hidden();
    },

    /**
     * 
     * @param {int} playerPosition 
     */
    on_change_player_select: function (playerPosition) {
        const select = this.form_jogador_config.element.querySelector(`#jogador_${playerPosition}_select`);
        const selectValue = select.options[select.selectedIndex].value
        this.view_player_input(playerPosition, selectValue);
    },

    /**
     * 
     * @param {int} playerPosition 
     * @param {string} selectValue 
     */
    view_player_input: function (playerPosition, selectValue) {
        const inputName = this.form_jogador_config.element.querySelector(`#jogador_${playerPosition}_name`);
        if (selectValue == "maquina") {
            inputName.classList.add('hidden');
            inputName.value = "Maquina";
        }
        else {
            inputName.classList.remove('hidden');
            inputName.value = "";
        }
    },

    start: function () {
        this.board.fill('');
        this.draw();
        this.gameover = false;
        const players = {};
        for (let i = 1; i <= 2; i++ ) {
            const player = this.form_jogador_config.element.querySelector(`#jogador_${i}_name`);
            players[`player${i}`] = player.value;
        }
        this.define_players(players.player1, players.player2);
        this.form_jogador_config.hidden();
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

    /**
     * 
     * @param {int} position 
     * @returns 
     */
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
        // alert("GAME OVER");
        this.btn_start.element.classList.remove('hidden');
        this.btn_restar.element.classList.add('hidden');
    },

    check_winning_sequences: function (simbol) {
        for (i in this.winning_sequences) {
            if (this.board[this.winning_sequences[i][0]] == simbol &&
                this.board[this.winning_sequences[i][1]] == simbol &&
                this.board[this.winning_sequences[i][2]] == simbol) {
                return i;
            }
        }
        return -1;
    },

    /**
     * 
     * @param {int} winning_sequences_index 
     * @param {*} player 
     */
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
        this.container_player.define_player(this.player1.name, this.simbols.options[this.player1.turn_index], "1");
        this.container_player.define_player(this.player2.name, this.simbols.options[this.player2.turn_index], "2");
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