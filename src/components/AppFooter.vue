<template>
    <section class="footer py-5">
        <div class="container_85">
            <img class="logo" src="/public/author-logo-round-small.png" alt="">
        </div>
        <div class="container_55">
            <div class="row row-cols-3">
                <div class="col px-5">
                    <div>
                        <h2 class="subtitle mb-3">ABOUT ME</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia error a voluptates aspernatur repudiandae minus nemo sit minima dolorem.
                        </p>
                    </div>
                </div>
                <div class="col px-5">
                    <h2 class="subtitle mb-3">USEFULL LINKS</h2>
                    <ul class="list-unstyled">
                        <li class="mb-3" v-for="(link, i) in links" :key="i">
                            <font-awesome-icon class="me-3" :icon="['fas', 'chevron-right']" />
                            <item :item="link"/>
                        </li>
                    </ul>
                </div>
                <div class="col px-5">
                    <h2 class="subtitle mb-3">CONTACT INFO</h2>
                    <ul class="list-unstyled">
                        <li class="mb-3" v-for="(data, i) in info" :key="i">
                            <item :item="data"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import item from './ListItems.vue';
    export default {
        components:{
            item
        },
        data(){
            return{
                links:[
                    {
                        text:'Latest Books',
                        href:'#'
                    },
                    {
                        text:'Upcoming Events',
                        href:'#'
                    },
                    {
                        text:'Recent Articles',
                        href:'#'
                    },
                    {
                        text:'Business Enquiries',
                        href:'#'
                    },
                    {
                        text:'Visit My foundation',
                        href:'#'
                    },
                ],
                info:[
                    {
                        text:'Latest Books',
                    },
                    {
                        text:'Upcoming Events',
                    },
                    {
                        text:'Recent Articles',
                    },
                    {
                        text:'Business Enquiries',
                    },
                    {
                        text:'Visit My foundation',
                    },
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    @use'../assets/Style/partials/variables' as*;


    .footer{
        background-image: url(/public/footer-3.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: $brand_grey;
        position: relative;
        font-size: 10px;
    }

    .subtitle{
        font-size: 16px;
        color: $brand_white;
    }

    .logo{
        max-width: 60px;
        position: absolute;
        top: 30%;
    }

</style>