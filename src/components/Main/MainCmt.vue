<template>
    <div class="app__main">
        <IntroCmt @onMoveBox="onMoveBox" />
        <AboutMe ref="childRef"/>
        <SkillCmt />
        <SelfIntro />
        <FuturePlan />
    </div>
</template>

<script>
import IntroCmt from "./Intro/IntroCmt.vue";
import AboutMe from "./AboutMe/AboutMe.vue";
import SkillCmt from "./Skill/SkillCmt.vue";
import SelfIntro from "./SelfIntro/SelfIntro.vue";
import FuturePlan from "./FuturePlan/FuturePlan.vue";


export default {
    data() {
        return {
            element: null,
        };
    },
    components: {
        IntroCmt,
        AboutMe,
        SkillCmt,
        SelfIntro,
        FuturePlan,
    }, 
    methods: {
        onMoveBox() {
        // 자식 컴포넌트의 요소에 scrollIntoView 호출
            const childRef = this.$refs.childRef.getChildRef();
            if (childRef) {
                childRef.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
    },
};
</script>

<style src="./Main.css">
</style>
