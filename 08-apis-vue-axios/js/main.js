const app = Vue.createApp({
    data() {
        return {
            title: "Peticiones Axios",
            datos: [],
        };
    },
    created() {
        this.getPost();
    },
    methods: {
        async getPost(){
            
       }
    }
});