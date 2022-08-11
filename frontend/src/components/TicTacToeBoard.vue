<template>
    <div class="board">
        <span v-for="(n, row) in 3" :key="row">
            <span v-for="(m, col) in 3" :key="col">
                <span v-if="board[row][col] === 'X'" class="cell cell-x">X</span>
                <span v-else-if="board[row][col] === 'O'" class="cell cell-o">O</span>
                <span v-else class="cell cell-empty" @click="playerMove(row, col)"> _ </span>
            </span>
            <br>
        </span>
    </div>
</template>

<script>

export default {
    
  data() {
    return {
      board : [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ],
        player1 : "X",
        player2 : "O",
        turn : "player1",
    };
  }, 
  methods: {
    playerMove(row, col) {
      if (this.turn == "player1") {
        this.board[row][col] = this.player1;
        this.turn = "player2";
      } else {
        this.board[row][col] = this.player2;
        this.turn = "player1";
      }  
      console.log(this.board);
    },
  },
  
};
</script>

<style>
</style>