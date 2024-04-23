<template>
    <AppHero/>
    <SectionAbout/>
    <SectionWhereFind/>
</template>

<script>
    import AppHero from './main_components/AppHero.vue';
    import SectionAbout from './main_components/SectionAbout.vue';
    import SectionWhereFind from './main_components/SectionWhereFind.vue';


    export default {
        components:{
            AppHero,
            SectionAbout,
            SectionWhereFind
        }
        
    }
</script>

<style lang="scss" scoped>

</style>