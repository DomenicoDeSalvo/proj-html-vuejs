<!-- WHERE TO FIND THE AUDIOBOOK -->
<template>
    <section class="audiobook">
        <div class="container_55">
            <div class="row row-cols-2">
                <div class="col d-flex align-items-end pt-5">
                    <img src="/public/audible-app.png" alt="">
                </div>
                <div class="col">
                    <div class="info text-center d-flex flex-column gap-2 justify-content-center">
                        <h2 class="subtitle">New Audiobook</h2>
                        <div>NO TIME TO READ? NO PROBLEM. LISTEN TO IT</div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsum veniam illo repudiandae eaque, pariatur
                        </p>
                        <div>
                            <ul class="d-flex list-unstyled gap-3">
                                <li>
                                    <img src="/public/audible-logo.png" alt="">
                                </li>
                                <li>
                                    <img src="/public/bn-logo-tall.png" alt="">
                                </li>
                                <li>
                                    <img src="/public/kindle-logo-tall.png" alt="">
                                </li>
                            </ul>
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

    .audiobook{
        background-image: url(/public/banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .info{
        height: 100%;
        h2{
            color: $brand_white;
        }
        div{
            color: $brand_yellow;
        }
        p{
            color: $brand_grey;
            font-size: 12px;
            padding: 0 20px;
        }
    }

</style>