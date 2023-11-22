<template>
    <div class="app__projects-content-title">
        <div class="app__projects-content-title-item p__title">2. Scent's talk</div>
        <div class="app__projects-content-title-item p__title">2023.7 ~ 2023.8</div>
        <div class="app__projects-content-title-item p__content">
        퍼스널 컬러를 잇는 퍼스널 향수를 추천해주는 사이트
        </div>
        <div class="app__projects-content-title-item item-button">
        <button @click="handleOpen" class="p__title">More</button>
        </div>
    </div>
    <div class="app__projects-gallery">
        <div class="app__projects-gallery-container" ref="scrollRef">
        <div
            v-for="(image, index) in project.imgUrl"
            :key="index"
            class="app__projects-gallery-card flex__center"
        >
            <img :src="image" alt="gallery" />
        </div>
        </div>
        <div class="app__projects-gallery-arrows">
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="gallery__arrow-icon"
            @click="() => scroll('left')"
            :font-size="30"/>
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="gallery__arrow-icon"
            @click="() => scroll('right')"
            :font-size="30"/>
        </div>
    </div>
    <ReadMore v-if="open" :content="project" :setClose="setClose" :open="open" />

</template>

<script>
import ReadMore from '../ReadMore/ReadMore';

export default {
    props:{
        project:Object
    },
    data() {
        return {
            open: false,
        };
    },
    methods: {
        setClose(){
            this.open=false
        },  
        handleOpen() {
            this.open = !this.open;
        },
        scroll(direction) {
            const { scrollRef } = this.$refs;
            if (direction === 'left') {
                scrollRef.scrollLeft -= 300;
            } else if (direction === 'right') {
                scrollRef.scrollLeft += 300;
            }
        },
    },
    components: {
        ReadMore,
    },
};
</script>

<style src="./Projects.css">
</style>
