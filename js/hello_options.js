(()=>{
    const { createApp } = Vue;
    const app = createApp({
        data() {
            return {
                message: 'Hello Vue.js!'
            }
        }
    }).mount('#app');
})();