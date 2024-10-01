(()=>{
    const {createApp,ref} = Vue;
    const app = createApp({
        setup() {
            const max = 13;
            const images = [];
            for(let i = 1; i <= max; i++){
                images.push(`slide_img/img-${i}.jpeg`);
            }
            const current = ref(0);
            const next = () => {
                current.value = (current.value + 1) % max;
            };
            const prev = () => {
                current.value = (current.value - 1 + max) % max;
            };
            let interval;
            const stop = () => {
                clearInterval(interval);
            }
            const start = () => {
                stop();
                interval = setInterval(next,2000);
            }
            return { images, current, next, prev, stop, start };
        },
        mounted() {
            this.start();
        }
    }).mount('#app');


})();