<template>
    <div>
        <NavCmt/>
        <div class="app__careers">
            <div class="app__careers-title">
            <div class="app__careers-main-title p__title">Career</div>
            <div class="app__careers-title-bar"></div>
            </div>
            <div class="app__careers-content-box">
            <div class="app__careers-content">
                <div class="app__careers-content-title p__title">공모전</div>
                <ul><li class="p__content">새싹톤</li></ul>
                <div v-if="toggle1" class="p__content">
                    <font-awesome-icon :icon="['fas', 'caret-down']" style="font-size:30;color: #B799C5;" @click="toggle1 = !toggle1"/>
                <br/>&nbsp;&nbsp;공모전이라는 것을 경험하고자 무작정 신청한 공모전이었다. 부족한 경험과 무모한 도전으로 비록 좋은 결과를 내진 못하였지만 
                새로운 것에 두려워하지 않고 나도 도전할 수 있다는 것에 의미가 있었던 활동이었다. 이 경험을 발판삼아 후에 참여할 공모전에서는 내가 바라는
                결과를 낼 수 있는 사람이 되었으면 좋겠다는 생각이다. 
                </div>
                <div v-else class="p__content">
                    <font-awesome-icon :icon="['fas', 'caret-right']" style="font-size: 30; color:#F4CE6D" @click="toggle1 = !toggle1"/>
                </div>
            </div>
            <div class="app__careers-content">
                <div class="app__careers-content-title p__title">활동</div>
                <ul>
                    <li className='p__content'>어플레이(2021.3 ~ 9)</li>
                    <li className='p__content'>UMC 5기(2023.9 ~)</li>
                </ul>
                <div v-if="toggle2" class="p__content">
                    <font-awesome-icon :icon="['fas', 'caret-down']" style="font-size:30;color: #B799C5;" @click="toggle2 = !toggle2"/>
                    <br/>&nbsp;&nbsp;어플레이는 대학교에 입학하고 처음으로 가입한 교내 동아리이다. 코로나 시국에도 의미있는 동아리 활동을 한 번 경험해보고 싶어 가입했었다.
                                    1학년 때 아무래도 코로나가 점점 심해져 동아리 활동에 제약사항이 많아지다 보니 다른 동아리 부원들과 함께 참여하는 활동이 적었던 것에 아쉬움이 남았다. 그래도
                                    어플레이에서 JAVA 스터디를 진행하면서 알고리즘을 짜는 것에 대해 약간이나마 다가갈 수 있었다. <br/>
                                    &nbsp;UMC는 2023-2학기에 참여하고 있는 연합동아리이다. 자기소개서나 면접을 준비하여 들어가는 동아리 가입은 처음이라 지원이 망설여졌지만, 지금 생각하였을 때 그때 용기를 내어
                                    지원한 것이 잘한 선택이라고 느껴진다. 현재 Web파트를 동아리원들과 함께 스터디를 하며 React 개념을 익혀나가고 있다. 또한 추후 방학에 진행될 타 학교와의 협업프로젝트에서
                                    의미있는 결과를 내기 위해서 계속해서 조금씩 노력하고 있다.
                </div>
                <div v-else class="p__content">
                    <font-awesome-icon :icon="['fas', 'caret-right']" style="font-size: 30; color:#F4CE6D" @click="toggle2 = !toggle2"/>
                </div>
            </div>
            <div class="app__careers-content">
                <div class="app__careers-content-title p__title">스터디</div>
                <ul>
                    <li className='p__content'>JAVA 스터디(2021)</li>
                    <li className='p__content'>운영체제 스터디(2022)</li>
                    <li className='p__content'>리액트 스터디(2023)</li>
                </ul>
                <div v-if="toggle3" class="p__content">
                    <font-awesome-icon :icon="['fas', 'caret-down']" style="font-size:30;color: #B799C5;" @click="toggle3 = !toggle3"/>
                    <br/>&nbsp;&nbsp;지난 대학생활동안 매년 꾸준하게 여러 방면의 스터디를 참여해왔었다. 1학년에는 JAVA, 2학년에는 운영체제(OS), 3학년 현재는 React 스터디를 진행하고 있다.
                                    스터디를 한다고 해서 해당 분야에 대해 확실한 지식을 쌓았고 잘 응용할 수 있다! 이런 것은 아니지만, 스터디를 진행할 때마다 그 주의 과제를 잘 해내고 꾸준히 해나가는 습관을
                                    들일 수 있었던 것에 있어 좋은 경험이 되었다고 생각이 든다. 물론 JAVA, OS, React 등에 대한 지식을 좀 더 얻어갈 수 있는 활동이었기도 했다.
                </div>
                <div v-else class="p__content">
                    <font-awesome-icon :icon="['fas', 'caret-right']" style="font-size: 30; color:#F4CE6D" @click="toggle3 = !toggle3"/>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavCmt from '../Nav/NavCmt.vue';
export default {
    components:{
        NavCmt
    },
    data() {
        return {
            toggle1: false,
            toggle2: false,
            toggle3: false,
        };
    },
};
</script>

<style src="./Career.css">
</style>
