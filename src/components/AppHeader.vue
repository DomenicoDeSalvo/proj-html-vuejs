<template>
    <header>
        <nav class="container_85">
            <div class="row">
                <ul class="mt-3 list-unstyled d-flex gap-3 justify-content-end">
                    <li v-for="(nav, i) in navBar" :key="i">{{ nav.text }}</li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
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
                        text:'C',
                        href:'#'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>