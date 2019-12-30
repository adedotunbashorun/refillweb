<template>
    <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
            <span class="glyphicon glyphicon-globe"></span>Notification<span class="caret"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
            <li v-for="notification in notifications" :key="notification">
                new user register
                <small><a href="#" v-on:click="MarkAsRead(notification)">{{ notification.data.user.name }}</a></small>
            </li>

        </ul>
    </li>
</template>

<script>
    export default {
        props: ['notifications'],
        methods: {
            MarkAsRead: function(notification){
                var data = {
                    id: notification.id
                };
                axios.post('/admin/notification/read',data).then(response =>{
                    window.location.href = "/admin/users/" + notification.data.user.id + "/edit";
                });
            }
        }


    }
</script>
