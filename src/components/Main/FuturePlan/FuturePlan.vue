<template>
    <div class="app__main_futurePlan">
        <div class="app__main_futurePlan-titleBox">
            <div class="app__main_futurePlan-title p__title">Plan</div>
            <div class="app__main_futurePlan-titleBar"></div>
        </div>
        <div class="app__main_futurePlan-content">
            <div v-for="(data,index) in datas" :key="index" class='app__main_futurePlan-contentBox'>
                <div class='app__main_futurePlan-content-title'>
                    <div class='content-title p__title' :style="{ background: color }">{{ data.name }}</div>
                </div>
                <div class='app__main_futurePlan-content-lists'>
                    <div v-for="(plan, index) in data.plans" :key="index" class='content-lists'>
                        <font-awesome-icon icon="fa-solid fa-square-check" style="color: tomato;font-size: 30;"/>
                        <div class='content-list p__content'>{{ plan }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const datas = [
    {
        name: 'NOW',
        plans: ['K-DUCK 구현', 'UMC 스터디', '리액트 공식문서 공부'],
        color: "#F4CE6D"
    },
    {
        name: 'FUTURE',
        plans: ['정보처리기사 자격증 취득', '자바스크립트 코테', '네이버 부스트캠프 준비', 'UMC 협업 프로젝트 진행'],
        color: "#B799C5"
    }
];

export default {
    data() {
        return {
            datas: datas
        }
    }
};
</script>

<style src="./FuturePlan.css">
</style>
