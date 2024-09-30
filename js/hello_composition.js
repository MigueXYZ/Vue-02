(()=>{
    const { createApp,ref } = Vue;

    createApp({
        setup() {
            const message = ref('Hello Vue.js!');
            return { message };
        }
    }).mount('#app');

})();