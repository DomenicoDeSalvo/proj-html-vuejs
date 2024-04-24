<template>
    <div> 
        <ul class="list-unstyled">
            <li class="mb-3">{{ item.address }}</li>
            <li class="mb-3">Phone:{{ item.phone }}</li>
            <li class="mb-3">Mobile:{{ item.mobile }}</li>
            <li class="mb-3">Email{{ item.mail }}</li>
            <li>
                <ul class="list-unstyled d-flex gap-3">
                    <li class="link" v-for="(social, i) in item.socials" :key="i">
                        {{ social.name }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            item:{
                type:Object
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .link{
        cursor: pointer;
    }
</style>