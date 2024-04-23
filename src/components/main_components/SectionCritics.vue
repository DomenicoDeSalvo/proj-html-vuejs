<template>
    <section>
        <!-- TITLE -->
        <div class="container_65">
            <div class="d-flex justify-content-between align-items-center my-4">
                <div>
                    <h2 class="subtitle">What the critics say</h2>
                    <div class="slogan">TESTIMONIALS FROM AROUND THE WORLD</div>
                </div>
                <div>
                    <button class="yellow btn">
                        Read all Testimonials
                    </button>
                </div>
            </div>
        </div>
        <!-- ARTICLES -->
        <div class="container_6"></div>5
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @use'../../assets/Style/partials/variables' as*;

        //TITLE
    .slogan{
        color: $brand_green;
        font-size: 14px;
    }

    .yellow{
        background-color: $brand_yellow;
        color: $brand_white;
        font-size: 12px;
        &:hover{
            background-color: $brand_yellow_hover;
        }
    }

</style>