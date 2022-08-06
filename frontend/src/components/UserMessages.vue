<template>
    <div class="messages">
        <div v-for="message in messages" class="message" :key="message.id">
            <div class="message-header">
                <span class="message-date">{{ message.created_at }}</span>
            </div>
            <div class="message-body">
                {{ message.body }}
            </div>
            <button @click="deleteMessage(message)">Delete</button>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    export default {
        data() {
            return {
                messages: [],
            };
        },
        methods: {
            async getMessages() {
                try {
                    const response = await axios.get('http:localhost:8000/api/messages/');
                    this.messages = response.data;
                } catch (error) {
                    console.log(`There was an error fetching: ${error}`);
                }
            },
            deleteMessage(message) {
                axios.delete(`http:localhost:8000/api/messages/${message.id}/`)
                    .then(() => {
                        this.messages = this.messages.filter(m => m.id !== message.id);
                    }).catch(error => {
                        console.log(`There was an error deleting: ${error}`);
                    });
            },
        },
        created() {
            this.getMessages();
        },
    }
</script>