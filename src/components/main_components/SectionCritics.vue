<template>
    <section class="my-5">
        <!-- TITLE -->
        <div class="container_65">
            <div class="d-flex justify-content-between align-items-center mb-4">
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
        <!-- MAIN ARTICLE -->
        <div class="container_65">
            <div class="row">
                <div class="main_article col-7">
                    <div class="container_75 py-5 d-flex flex-column gap-3">
                        <h2 class="subtitle">Best Author Of His Generation</h2>
                        <div>This book will change your perspective on life</div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus natus quos vitae hic a deserunt iusto? Cum, ipsam veritatis provident impedit aliquid consectetur modi quam, soluta, repudiandae id sit reprehenderit!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus natus quos vitae hic a deserunt iusto? Cum, ipsam veritatis provident impedit aliquid consectetur modi quam, soluta, repudiandae id sit reprehenderit!
                        </p>
                        <div>
                            <img class="me-2 nytimes" src="/public/nytimes-logo.png" alt="">
                            <span>Justine Kilpatrick,</span>
                            <span class="newspaper"> The New York Times</span>
                        </div>
                    </div>
                </div>
                <div class="col-5"></div>
            </div>
        </div>
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

    //ARTICLES
    //MAIN ARTICLE
    .main_article{
        background-image: url(/public/testimonial2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-bottom-right-radius: 10% ;
        *{
            color: $brand_white;
        }
    }

    .subtitle::after{
        content: '';
        display: block;
        border: 1px solid $brand_grey;
        width: 100%;
        margin-top: 20px;
    }

    .newspaper{
        color: $brand_green;
    }

    .nytimes{
        max-width: 15px;
    }

</style>