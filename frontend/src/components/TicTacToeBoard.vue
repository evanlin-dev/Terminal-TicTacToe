<template>
  <div>
    <div>
      <b-container class="board">
        <span v-for="(n, row) in getBoard.length" :key="row">
          <b-row class="row justify-content-md-center" :key="row">
            <b-col cols="1" v-for="(n, col) in getBoard[row].length" :key="col">
              <b-button v-on:click="playerMove(row, col, turn)" :disabled="getBoard[row][col] !== '_'" variant="success">
                {{ getBoard[row][col] }}
              </b-button>
            </b-col>
          </b-row>
        </span>
      </b-container>
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
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          {
            age: 89,
            first_name: 'Geneva',
            last_name: 'Wilson',
            _rowVariant: 'danger'
          },
          {
            age: 40,
            first_name: 'Thor',
            last_name: 'MacDonald',
            _cellVariants: { age: 'info', first_name: 'warning' }
          },
          { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
        ],
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