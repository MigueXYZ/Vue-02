(()=>{
    const {createApp, ref} = Vue;
    const app = createApp({
        setup() {
            const count = ref(0);
            const increment = () => {
                count.value++;
            };
            const decrement = () => {
                count.value--;
            }
            return { count, increment, decrement };
        }
    }).mount('#app');
})();