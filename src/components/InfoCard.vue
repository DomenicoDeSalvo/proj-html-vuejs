<template>
    <div> 
        <ul class="list-unstyled">
            <li>{{ item.address }}</li>
            <li>Phone:{{ item.phone }}</li>
            <li>Mobile:{{ item.mobile }}</li>
            <li>Email{{ item.mail }}</li>
            <li>
                <ul class="list-unstyled d-flex" v-for="(social, i) in item.socials" :key="i">
                    <li>{{ social.name }}</li>
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
    li{
        margin-bottom: 10px;
    }

</style>