<template>
    <AppHero/>
    <SectionAbout/>
    <SectionWhereFind/>
    <SectionAudiobook/>
</template>

<script>
    import AppHero from './main_components/AppHero.vue';
    import SectionAbout from './main_components/SectionAbout.vue';
    import SectionWhereFind from './main_components/SectionWhereFind.vue';
    import SectionAudiobook from './main_components/SectionAudiobook.vue';


    export default {
        components:{
            AppHero,
            SectionAbout,
            SectionWhereFind,
            SectionAudiobook
        }
        
    }
</script>

<style lang="scss" scoped>

</style>