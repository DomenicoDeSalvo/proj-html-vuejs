<!-- MORE ARTICLES -->
<template>
    <section class="py-5">
        <!-- TITLE -->
        <div class="container_65">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 class="subtitle">Recent Articles</h2>
                    <div class="slogan">READ THE LATEST ENTRIES</div>
                </div>
                <div>
                    <button class="yellow btn">
                        All Articles
                    </button>
                </div>
            </div>
        </div>
        <!-- ARTICLES -->
        <div class="container_65">
            <div class="row">
                <div class="col-8">
                    <div class="article_container">
                        <div class="card p-5 custom">
                            <img src="/public/20-Tips.jpg" alt="...">
                            <div class="card-body">
                                <h4 class="event_name">20 Creativity Tips</h4>
                                <p class="article_author card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dicta!
                                </p>
                                <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam, doloremque corrupti eligendi voluptates praesentium consequuntur temporibus amet beatae sapiente?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="article_container">
                        <div class="card p-3 custom">
                            <img src="/public/thumb-13.jpg" alt="...">
                            <div class="card-body">
                                <h4 class="event_name">What's on Your Booklist?</h4>
                                <p class="article_author card-text">
                                Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                        <div class="card p-3 custom">
                            <img src="/public/thumb-08.jpg" alt="...">
                            <div class="card-body">
                                <h4 class="event_name">Instanbul Travel Guide</h4>
                                <p class="article_author card-text">
                                Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
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

    section{
        background-color: $brand_beige;
    }

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
            color: $brand_white;
        }
    }

    //ARTICLES

    .article_container{
        background-color: $brand_white;
        height: 100%;
        .custom{
            border: none;
            border-radius: 0;
            cursor: pointer;
        }

        .article_author{
            font-size: 10px;
        }
    }



</style>