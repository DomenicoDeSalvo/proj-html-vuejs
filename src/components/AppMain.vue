<template>
    <AppHero/>
    <SectionAbout/>
    <SectionWhereFind/>
    <SectionAudiobook/>
    <SectionCritics/>
    <SectionEvents/>
</template>

<script>
    import AppHero from './main_components/AppHero.vue';
    import SectionAbout from './main_components/SectionAbout.vue';
    import SectionWhereFind from './main_components/SectionWhereFind.vue';
    import SectionAudiobook from './main_components/SectionAudiobook.vue';
    import SectionCritics from './main_components/SectionCritics.vue';
    import SectionEvents from './main_components/SectionEvents.vue';

    
    export default {
        components:{
            AppHero,
            SectionAbout,
            SectionWhereFind,
            SectionAudiobook,
            SectionCritics,
            SectionEvents
        }
        
    }
</script>

<style lang="scss" scoped>

</style>