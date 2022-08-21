<template>
  <div>
    <div>
    </div>
    <div class="board">
        <span v-for="(n, row) in getBoard.length" :key="row">
            <span v-for="(m, col) in getBoard[0].length" :key="col">
                <span v-if="getBoard[row][col] === 'X'" class="cell cell-x">X</span>
                <span v-else-if="getBoard[row][col] === 'O'" class="cell cell-o">O</span>
                <span v-else class="cell cell-empty" @click="playerMove(row, col, turn)"> _ </span>
            </span>
            <br>
        </span>
    </div>
    
  </div>
    
</template>

<script>


export default {
  components: {
  },
  data() {
    return {
      /*
      board : [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ],*/
        player1 : "X",
        player2 : "O",
        turn : "X",
    };
  }, 
  methods: {
    playerMove(row, col, player) {
      if (this.turn === this.player1) {
        this.$store.commit('board/playerMove', {row, col, player});
        this.turn = this.player2;
      } else {
        this.$store.commit('board/playerMove', {row, col, player});
        //this.board = this.$store.state.board.board;
        this.turn = this.player1;
      }
      //this.board = this.getBoard;
      console.log(this.getBoard);
    },
  },
  computed: {
    getBoard() {
      return this.$store.state.board.board;
    },
  }
 
    
  
};
</script>

<style>
</style>