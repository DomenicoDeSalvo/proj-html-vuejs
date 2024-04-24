<template>
    <header class="position-absolute top-0 start-0 end-0 z-2" >
        <nav class="container_85">
            <div class="d-flex m-auto justify-content-between">
                <img class="mt-2 logo" src="/public/author-logo-round-small.png" alt="">
                <ul class=" mt-4 list-unstyled d-flex gap-3">
                    <li v-for="(nav, i) in navBar" :key="i">
                        <item :item="nav"/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import item from './ListItems.vue';
    export default {
        components:{
            item
        },
        data(){
            return{
                navBar:[
                    {
                        text:'Home',
                        href:'#'
                    },
                    {
                        text:'About Me',
                        href:'#'
                    },
                    {
                        text:'Testimonials',
                        href:'#'
                    },
                    {
                        text:'My Blog',
                        href:'#'
                    },
                    {
                        text:'Meetups',
                        href:'#'
                    },
                    {
                        text:'Shop',
                        href:'#'
                    },
                    {
                        text:'Contact Me',
                        href:'#'
                    },
                    {
                        text: 'Chart',
                        href:'#'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use'../assets/Style/partials/variables' as*;

    li{
        color: white;
    }
    
    .logo{
        max-width: 150px;
    }

    li span{
        cursor: pointer;
    }

</style>