<template>
    <div class="app__main_intro" ref="element">
        <div class="app__main_intro-content">
            <div class="app__main_intro-greeting p__title">
                {{ title }}
            </div>
            <div class="app__main_intro-down">
                <font-awesome-icon :icon="['fas', 'circle-arrow-down']" style="color:white;font-size:40" @click="handleClick"/>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    emits: ["onMoveBox"],
    setup(_,{emit} ) {
        const text = "안녕하세요\n Front-end 개발자 오수빈입니다";
        const title = ref("");
        const count = ref(0);

        const typing = () => {
            
                title.value += text[count.value];

                if (count.value < text.length - 1) {
                    count.value++;
                    setTimeout(typing,100)
                }
        };

        onMounted(() => {
            typing();
        });
        const handleClick = () => {
            emit("onMoveBox");
        };
        return {
            title,
            handleClick
        };
    },
    methods: {
        triggerMoveBox() {
            this.$emit("click");
        },
    },
};
</script>

<style src="./Intro.css">

</style>
