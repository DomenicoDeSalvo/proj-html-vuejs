<template>
    <AppHero/>
    <SectionAbout/>
    <SectionWhereFind/>
    <SectionAudiobook/>
    <SectionCritics/>
    <SectionEvents/>
    <SectionNewsletter/>
    <SectionMoreInfo/>
</template>

<script>
    import AppHero from './main_components/AppHero.vue';
    import SectionAbout from './main_components/SectionAbout.vue';
    import SectionWhereFind from './main_components/SectionWhereFind.vue';
    import SectionAudiobook from './main_components/SectionAudiobook.vue';
    import SectionCritics from './main_components/SectionCritics.vue';
    import SectionEvents from './main_components/SectionEvents.vue';
    import SectionNewsletter from './main_components/SectionNewsletter.vue';
    import SectionMoreInfo from './main_components/SectionMoreInfo.vue';

    
    export default {
        components:{
            AppHero,
            SectionAbout,
            SectionWhereFind,
            SectionAudiobook,
            SectionCritics,
            SectionEvents,
            SectionNewsletter,
            SectionMoreInfo,
        }
        
    }
</script>

<style lang="scss" scoped>

</style>