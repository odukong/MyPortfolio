<template>
    <div class="app__main_selfIntro">
        <div class="app__main_selfIntro-titleBox">
            <div class="app__main_selfIntro-title p__title">AboutMe</div>
            <div class="app__main_selfIntro-titleBar"></div>
        </div>
        <div class="app__main_selfIntro-content">
            <div class="app__main_selfIntro-contentText p__content">
                <font-awesome-icon :icon="['fas', 'arrow-right']" style="color:#F4CE6D;font-size: 30;"/>
                매사 최선을 다해 최고의 개발자가 <br />
                되고 싶은 프론트엔드 개발자 오수빈입니다.<br /><br />
                저의 장점은 항상 탐구하려는 자세입니다. <br />
                어떤 어려움이 닥쳐도 좌절하기보다는 어려움을<br />
                어떻게 극복해나갈 지에 더 집중을 합니다.<br /><br />
                항상 노력하는 자세로 매일 매일 조금씩<br />
                성장해나가고 있습니다.
            </div>
            <div class="app__main_selfIntro-contentImg">
                <img :src="images.coding" alt="coding" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            images: {
                coding:require("../../../assets/images/coding_img.png")
            }
        };
    },
};
</script>

<style src="./SelfIntro.css">
</style>
