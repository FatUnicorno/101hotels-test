<template>
    <div>Тестовое задание Кислов Николай.</div>
</template>
<script>
const default_layout = "default";

export default {
    computed: {},
    data() {
        return {
            message: "Hello 123",
            data: [],
        };
    },

    async created() {
        await this.getPosts();
    },

    methods: {
        async getPosts() {
            console.log("here");
            await this.$axios
                .get(`/api/comments/`)
                .then((res) => {
                    this.data = res.data;
                })
                .catch((e) => {
                    console.warn(e.message);
                });
        },
    },
};
</script>
