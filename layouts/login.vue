<template>
    <div>
        <nuxt />
    </div>
</template>
<script>
export default {
    middleware: 'guest',
    head () {
        return {
            bodyAttrs: {
                id: '',
                style: "background-color: #666666;"
            },
            link: [
                { href:"vendor/bootstrap/css/bootstrap.min.css" ,rel:"stylesheet",type:"text/css"},
                { href:"vendor/animate/animate.css" ,rel:"stylesheet",type:"text/css"},
                { href:"vendor/css-hamburgers/hamburgers.min.css" ,rel:"stylesheet",type:"text/css"},
                { href:"vendor/animsition/css/animsition.min.css" ,rel:"stylesheet",type:"text/css"},
                { href:"vendor/select2/select2.min.css" ,rel:"stylesheet",type:"text/css"},
                { href:"vendor/daterangepicker/daterangepicker.css" ,rel:"stylesheet",type:"text/css"},
                { href:"css/util.css" ,rel:"stylesheet",type:"text/css"},
                { href:"css/main.css" ,rel:"stylesheet",type:"text/css"}
            ],
            script: [
                { src: 'vendor/jquery/jquery-3.2.1.min.js' },
                { src: 'vendor/animsition/js/animsition.min.js' },
                { src: 'vendor/bootstrap/js/popper.js' },
                { src: 'vendor/bootstrap/js/bootstrap.min.js' },
                { src: 'vendor/select2/select2.min.js' },
                { src: 'vendor/daterangepicker/moment.min.js' },
                { src: 'vendor/daterangepicker/daterangepicker.js' },
                { src: 'vendor/countdowntime/countdowntime.js' },
                { src: 'js/main.js' }

            ]
        }
    },
    mounted(){
    }
}
</script>
