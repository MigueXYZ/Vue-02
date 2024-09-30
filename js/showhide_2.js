(()=>{

    const {createApp,ref} = Vue;

    const app = createApp({
        setup() {
            const invisible = ref(false);
            const toggle = () => {
                invisible.value = !invisible.value;
            };
            const show = () => {
                invisible.value = false;
            }
            const hide = () => {
                invisible.value = true;
            }
            return { invisible, toggle, show, hide };
        }
    }).mount('#app');
})();