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
                id: 'page-top'
            },
            link: [
                { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:'anonymous' },
                { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js' },
                { rel: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css'}
            ],
            script: [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js' },

            ]
        }
    }
}
</script>
