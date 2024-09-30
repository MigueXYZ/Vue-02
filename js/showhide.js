(()=>{

    const {createApp,ref} = Vue;

    const app = createApp({
        setup() {
            const visible = ref(true);
            const toggle = () => {
                visible.value = !visible.value;
            };
            const show = () => {
                visible.value = true;
            }
            const hide = () => {
                visible.value = false;
            }
            return { visible, toggle, show, hide };
        }
    }).mount('#app');
})();