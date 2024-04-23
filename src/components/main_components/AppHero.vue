<template>
    <div class="hero text-light">
        <div class="container_80">
            <div class="hero__intro mb-4">
                <h1>Damon Vaughn</h1>
                <h2>Best-selling author and the most influential public intellectual in the western world right now.</h2>
                <h6>- The New York Times</h6>
            </div>
            <div class="d-flex gap-1">
                <button class="btn text-light">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" />
                </button>
                <button class="btn text-light">
                    <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .hero{
        background-image: url(/public/author_banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .hero__intro{
        max-width: 420px;
        padding-top: 130px;
    }

    button{
        background-color: black;
    }

</style>