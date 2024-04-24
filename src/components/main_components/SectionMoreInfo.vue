<!-- SECTION WHERE USERS CAN FIND MORE INFO ABOUT THE AUTHOR -->
<template>
    <section class="text-center py-5">
        <div class="container_65 my-4">
            <h2 class="subtitle">Dig A Little Deeper Into Damon Vaughn</h2>
            <div class="invitation">FIND OUT MORE ABOUT THE AUTHOR HIMSELF</div>
        </div>
        <div class="container_65">
            <div class="row row-cols-3">
                <div class="col">
                    <div class="card custom">
                        <img src="/public/box-1.jpg"  alt="...">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title">About me</h5>
                            <p class="card-text">Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom">
                        <img src="/public/box-4.jpg"  alt="...">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title">My Latest Book</h5>
                            <p class="card-text">Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom">
                        <img src="/public/box-3.jpg"  alt="...">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title">Book Signing</h5>
                            <p class="card-text">Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
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

    .invitation{
        color: $brand_green;
        font-size: 14px;
    }

    .custom{
        border: none;
        cursor: pointer;
        img{
            border-bottom-right-radius: 50px;
            filter: brightness(0.5);
        }
        &:hover{
            opacity: 0.8;
        }
        h5{
            color: $brand_white;
            &::after{
                content: '';
                display: block;
                border: 1px solid $brand_grey;
                width: 10%;
                margin-top: 20px;
                margin-left: 45%;
            }
        }
        p{
            color: $brand_yellow;
        }
    }

</style>