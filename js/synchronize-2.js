(()=>{
    const { createApp,ref } = Vue;

    const app = createApp({
        data() {
            return {
                name:'',
                grade:'',
                selectedPeriod:'',
                periods:[
                    {text:'Periodic Evaluation',value:'P'},
                    {text:'Normal Exam',value:'N'},
                    {text:'Appeal Exam',value:'A'},
                    {text:'Special Exam',value:'S'},
                    {text:'Extraordinary Exam',value:'X'},
                ],
            }
        }
    }).mount('#app');
})();