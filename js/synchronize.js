(()=>{
    const { createApp,ref } = Vue;

    const app = createApp({
        data() {
            return {
                name:'',
                grade:'',
                period:'',
            }
        }
    }).mount('#app');
})();