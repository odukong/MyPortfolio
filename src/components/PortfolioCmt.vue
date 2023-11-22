<template>
    <div>
        <NavCmt/>
        <MainCmt/>
    </div>
</template>

<script>
import MainCmt from "./Main/MainCmt.vue";
import NavCmt from "./Nav/NavCmt.vue";

export default {
    components: {
    MainCmt,
    NavCmt
}
}
</script>