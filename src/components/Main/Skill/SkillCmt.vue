<template>
    <div class="app__main_skill">
        <div class="app__main_skill-title">
            <div class="app__main_skill-titleText p__title">Skills</div>
            <div class="app__main_skill-titleBar"></div>
        </div>
        <div class="app__main_skill-content">
            <div
                v-for="skill in skills"
                :key="skill.id"
                class="app__main_skill-contentBox"
            >
                <div class="app__main_skill-content-title">
                    <div class="content-title p__title">
                        {{ skill.name }}
                    </div>
                </div>
                <div class="app__main_skill-content-imgBox">
                    <img v-for="(img, index) in skill.url" :key="index" :src="img" :alt="'skill ' + index" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const skills=[
    {
        id:1,
        name:"Frontend",
        count:3,
        url:[require("../../../assets/images/HtmlCSSJS.png"),require("../../../assets/images/Bootstrap.png"),require("../../../assets/images/React.png")]
    },
    {
        id:2,
        name:"Version",
        count:2,
        url:[require("../../../assets/images/github.png"),require("../../../assets/images/git.png")]
    },
    {
        id:3,
        name:"Certificate",
        count:1,
        url:[require("../../../assets/images/Linux.png")]
    }
]

export default {
    data() {
        return {
            skills,
        };
    },
    components: {
    },
};
</script>

<style src="./Skill.css">
</style>
