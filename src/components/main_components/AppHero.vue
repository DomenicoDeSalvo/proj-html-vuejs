<template>
    <div class="hero mb-5">
        <!-- HERO INTRO AND SLIDER BUTTONS -->
        <section>
            <div class="container_80">
                <div class="hero__intro mb-4">
                    <h1 class="decorated">Damon Vaughn</h1>
                    <h2 class="subtitle">Best-selling author and the most influential public intellectual in the western world right now.</h2>
                    <div>- The New York Times</div>
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
        <section class="icons z-3">
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
        <!-- LATEST RELEASE -->
        <section class="latest position-absolute bottom-0 end-0 py-4">
            <div class="container_80">
                <div class="row row-cols-2">
                    <div class="col">
                        <img class="" src="/public/book-widget.png" alt="">
                    </div>
                    <div class="description col text-center">
                        <h2 class="subtitle">Latest Book Release</h2>
                        <h5>D.VAUGHN AUTOBIOGRAPHY</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe ut asperiores aliquam possimus similique!</p>
                    </div>
                </div>
            </div>
            <div class="container_80 pb-5">
                <button class="rounded-start">
                    <span><font-awesome-icon :icon="['fab', 'amazon']" />  Buy on Amazon</span>
                </button>
                <button class="rounded-end">
                    <span><font-awesome-icon :icon="['fab', 'apple']" />  Buy on AppStore</span>
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

//HERO LAYOUT
    .hero{
        background-image: url(/public/hero-07-2x.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: $brand_white;
        position: relative;
        padding: 60px 0;
    }

    .hero__intro{
        max-width: 420px;
        padding-top: 130px;
        h1{
            color: $brand_yellow;
        }
        div{
            color: $brand_grey;
            font-style: italic;
        }
    }

    .slider button{
        background-color: $brand_black;
        color: $brand_white;
    }

    //ICONS
    .icons{
        position: absolute;
        top: 20%;
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

    //LATEST RELEASE
    .latest{
        background-color: $brand_white;
        width: calc(100% / 3);
        max-height: 50%;
        color: black;  
        .description{

            *{
                text-align: left;
                
            }
            h2{
                font-size: 24px;
            }

            h5{
                font-size: 12px;
                font-weight: 700;
                color: $brand_yellow;
            }

            p{
                font-size: 12px;
            }
        }  
        button{
            font-size: 12px;
            width: 50%;
            height: 30px;
            border: 2px solid #C0E1D5;
            background-color: $brand_white;
            &:hover{
                background-color: #F5FCFA;
                border-color: #A4D2C2;
            }
        }    
    }

</style>