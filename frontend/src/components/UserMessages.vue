<template>
    <div class="messages">
        <div v-for="message in messages" class="message" :key="message.id">
            <div class="message-header">
                <span class="message-date">{{ message.created_at }}</span>
            </div>
            <div class="message-body">
                {{ message.body }}
            </div>        
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "http://localhost:8000/api/messages/"
        );
        this.messages = response.data;
      } catch (error) {
        // log the error
        console.log(error);
      }
    },

  },
  created() {
    this.getData();
  },
};
</script>
