<template>
    <section class="about text-center d-flex align-items-center">
        <div class="container_65">
            <h1 class="decorated my-3">More about Damon Vaughn</h1>
            <p class="my-3">
                Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author 
                of the multi-million copy bestseller "The story of my life"
            </p>
            <button class="btn my-3">Meet The Author</button>
        </div>
    </section>
        
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @use'../../assets/Style/partials/variables' as*;

    .about{
        height: 320px;
    }
    h1{
        color: $brand_yellow;
    }

    button{
        background-color: $brand_green;
        color: $brand_white;
        font-size: 12px;
        &:hover{
            background-color: #357F60;
        }
    }

</style>