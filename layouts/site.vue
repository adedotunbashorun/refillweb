<template>
    <div>
        <Header />
        <nuxt />
        <Footer />
        <a href="javascript:void(0)" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </div>
</template>
<script>

export default {
    middleware: 'guest',
    head () {
        return {
            bodyAttrs: {
                id: 'back-to-top'
            },
            link: [
                { href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i" , rel:"stylesheet"},

                { href: "/frontend/lib/bootstrap/css/bootstrap.min.css" , rel:"stylesheet"},
                { href: "/frontend/lib/owlcarousel/assets/owl.carousel.min.css" , rel:"stylesheet"},
                { href: "/frontend/lib/owlcarousel/assets/owl.theme.default.min.css" , rel:"stylesheet"},
                { href: "/frontend/lib/font-awesome/css/font-awesome.min.css" , rel:"stylesheet"},
                { href: "/frontend/lib/animate/animate.min.css" , rel:"stylesheet"},
                { href: "/frontend/lib/modal-video/css/modal-video.min.css" , rel:"stylesheet"},
                { href: "/frontend/css/style.css" , rel:"stylesheet"}
            ],
            script: [
                { src: '/frontend/lib/jquery/jquery.min.js' },
                { src: '/frontend/lib/jquery/jquery-migrate.min.js' },
                { src: '/frontend/lib/bootstrap/js/bootstrap.bundle.min.js' },
                { src: '/frontend/lib/superfish/hoverIntent.js' },
                { src: '/frontend/lib/superfish/superfish.min.js' },
                { src: '/frontend/lib/easing/easing.min.js' },
                { src: '/frontend/lib/modal-video/js/modal-video.js' },
                { src: '/frontend/lib/owlcarousel/owl.carousel.min.js' },
                { src: '/frontend/lib/wow/wow.min.js' },
                { src: '/frontend/contactform/contactform.js' },
                { src: '/frontend/js/main.js' },
            ]
        }
    },
    components: {
        Header: () => import('~/components/Layout/Frontend/Header.vue'),
        Footer: () => import('~/components/Layout/Frontend/Footer.vue'),
    },
}
</script>
