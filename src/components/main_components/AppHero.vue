<template>
    <div class="hero">
        <!-- HERO INTRO AND SLIDER BUTTONS -->
        <section>
            <div class="container_80">
                <div class="hero__intro mb-4">
                    <h1>Damon Vaughn</h1>
                    <h2>Best-selling author and the most influential public intellectual in the western world right now.</h2>
                    <h6>- The New York Times</h6>
                </div>
                <div class="slider d-flex gap-1">
                    <button class="btn">
                        <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </button>
                    <button class="btn">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </button>
                </div>
            </div>
        </section>
        <!-- ICONS -->
        <section class="icons">
            <div class="d-flex flex-column m-3 gap-1">
                <button class="btn">
                    <!-- NOTA: Non riesco a capire cosa sia questa icona, ne metto una caso per il momento. -->
                    <div><font-awesome-icon class="demos_icon" :icon="['fas', 'book']" /></div>
                    <div class="text">Demos</div>
                </button>
                <button class="btn">
                    <div class="price d-flex">
                        <span class="dollar">$</span>
                        <span>39</span>
                    </div>
                    <div class="text">On Sale</div>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use'../../assets/Style/partials/variables' as*;
    .hero{
        background-image: url(/public/author_banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: $brand_white;
    }

    .hero__intro{
        max-width: 420px;
        padding-top: 130px;
    }

    .slider button{
        background-color: $brand_black;
        color: $brand_white;
    }

    .icons{
        position: absolute;
        top: 10%;
        right: 0;
        cursor: pointer;
        button{
            background-color: $brand_white;
            .text{
                font-size: 8px;
                color: $brand_grey;
            }
            .demos_icon{
                color: $brand_blue;
            }
            .price{
                color: $brand_green;
                font-weight: 700;
                font-size: 20px;

                .dollar{
                    font-size: 8px; 
                    margin-top: 4px;
                }
            }

        }
    }

</style>