<!-- PUBLIC EVENTS -->

<template>
    <section class="events text-center py-4">
        <div class="container_75 mb-3">
            <h2 class="subtitle">Upcoming Events</h2>
            <div class="invitation">MEET THE AUTHOR IN PERSON</div>
        </div>
        <div class="container_75">
            <div class="row row-cols-3">
                <div class="col">
                    <div class="card custom">
                        <img src="/public/event-05.jpg" alt="...">
                        <div class="card-body">
                            <h4 class="event_name">Chicago Book Signing</h4>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam, doloremque corrupti eligendi voluptates praesentium consequuntur temporibus amet beatae sapiente?
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom">
                        <img src="/public/event-04.jpg" alt="...">
                        <div class="card-body">
                            <h4 class="event_name">Meet & Greet With Amanda</h4>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam, doloremque corrupti eligendi voluptates praesentium consequuntur temporibus amet beatae sapiente?
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom">
                        <img src="/public/event-07.jpg" alt="...">
                        <div class="card-body">
                            <h4 class="event_name">Open Book: Dialogues</h4>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam, doloremque corrupti eligendi voluptates praesentium consequuntur temporibus amet beatae sapiente?
                            </p>
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
    .events{
        background-color: $brand_beige;
    }

    .invitation{
        color: $brand_yellow;
        font-size: 14px;
    }

    .custom{
        border: none;
        border-radius: 0;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }

    .event_name::after{
        content: '';
        display: block;
        border: 1px solid $brand_beige;
        width: 100%;
        margin-top: 20px;
    }

</style>