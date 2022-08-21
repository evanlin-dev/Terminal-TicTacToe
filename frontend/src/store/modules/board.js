//initial state

import Vue from "vue";

const state = () => ({
    count: 0,
    board : [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ],
    winner: false,
    turn: "X",
    someArray : [1,2,3,4,5,6,7,8,9],
});

const getters = {
    getBoard(state) { 
        return state.board;
    }
}

const actions = {}

const mutations = {
    playerMove(state, {row, col, player}) {
        console.log(player);
        if (state.board[row][col] === "_") {
            Vue.set(state.board[row], col, player);
            console.log("test");
        }
        //console.log(state.board);
    },

    increment(state) {
        state.count++;
        console.log(state.count);
    },

    doubleArrayValues(state) {
        state.someArray.forEach(function(item, index) {
            state.someArray[index] = item * 2;
        });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};