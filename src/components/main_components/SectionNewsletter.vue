<!-- NEWSLETTER SUBSCRIPTION -->
<template>
    <section class="newsletter py-5 d-flex flex-column justify-content-center ">
        <div class="container_25 my-3">
            <h2 class="subtitle">Subscribe To My Newsletter</h2>
            <div class="slogan">BE NOTIFIED ABOUT SIGNING TOUR DATES</div>
        </div>
        <div class="container_25 my-3 d-flex justify-content-center align-items-center gap-3">
            <input type="searh" placeholder="Insert Your email">
            <button class="btn">Subscribe</button>
        </div>
        <div class="container_25">
            <p class="info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, fugit.
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @use'../../assets/Style/partials/variables' as*;

    .newsletter{
        background-image: url(/public/banner-2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 350px;
    }

    .subtitle{
        color: $brand_white;
    }
    
    .slogan{
        color: $brand_yellow;
    }

    button{
        background-color: $brand_green;
        color: $brand_white;
        font-size: 12px;
        &:hover{
            background-color: $brand_green_hover;
            color: $brand_white;
            
        }
    }

    .info{
        color: $brand_grey;
        font-size: 12px;
    }

</style>