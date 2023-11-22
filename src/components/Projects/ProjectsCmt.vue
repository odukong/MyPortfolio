<template>
  <div>
    <NavCmt/>
    <template v-if="isMatch">
      <div class="app__projects">
        <div class="app__projects-title">
          <div class="app__projects-main-title p__title">Projects</div>
          <div class="app__projects-title-bar"></div>
        </div>
        <div class="app__projects-tabs">
          <button
            v-for="(project, i) in projects"
            :key="i"
            @click="contentChange"
            :value="project.id"
            class="p__title"
            :class="{ active: index === project.id - 1 }"
          >
            {{ project.id }}
          </button>
        </div>
        <div class="app__projects-content" style="color: white;">
          <component :is="projects[index].content" :project="projects[index]" />
        </div>
      </div>
    </template>
    <template v-else>
      <LoginCmt @changeId="checkId" @changePwd="checkPwd"/>
    </template>
  </div>
</template>

<script>
import LoginCmt from "./LoginCmt.vue";
import NavCmt from "../Nav/NavCmt.vue";
import ProjectCmt1 from "./ProjectCmt1.vue";
import ProjectCmt2 from "./ProjectCmt2.vue";
import ProjectCmt3 from "./ProjectCmt3.vue";
import ProjectCmt4 from "./ProjectCmt4.vue"
export default {
  components: {
    LoginCmt,
    NavCmt,
    ProjectCmt1,
    ProjectCmt2,
    ProjectCmt3,
    ProjectCmt4
  },
  data() {
    return {
      index: 0,
      id: "",
      pwd: "",
      isMatch:false,
      projects: [
        {
          id:1,
          title:'K-DUCK',
          date:'2023.9 ~',
          content: "ProjectCmt1",
          url:'https://github.com/odukong/K-DUCK',
          description:'K-POP 덕질을 위한 사이트',
          skill:'React, Bootstrap, CSS',
          pages:[['Artist Page','K-POP 아이돌들에 대한 정보를 모아볼 수 있는 페이지'],
                  ['Board Page','콘서트 리뷰, 홍보게시판과 같이 팬들과 이야기를 나눌 수 있는 페이지'],
                  ['Sale Page','굿즈를 사고팔 수 있는 페이지']],
          imgUrl:[require("../../assets/images/kduck_main1.png"),require("../../assets/images/kduck_main2.png"),require("../../assets/images/kduck_artist.png"),require("../../assets/images/kduck_board.png"),require("../../assets/images/kduck_board_detail.png"),require("../../assets/images/kduck_sale.png")]
        },
        {
          id:2,
          title:'Scent\'s talk',
          date:'2023.7 ~ 2023.8',
          content:"ProjectCmt2",
          url:'https://github.com/odukong/Scents-talk',
          description:'퍼스널 컬러를 잇는 퍼스널 향수를 추천해주는 사이트',
          skill:'HTML, CSS, JavaScript',
          pages:[['Scents\'s talk Reason','Scent\'s talk 사이트의 존재 의의에 대한 설명 섹션'],
                  ['Scents\'s talk Mean','Scent\'s talk 라는 사이트 이름의 의미를 해석하는 섹션'],
                  ['Personal Scents','각 퍼스널 컬러, 계절감에 맞는 향수를 추천하는 섹션']],
          imgUrl:[require("../../assets/images/scent_reason.png"),require("../../assets/images/scent_mean.png"),require("../../assets/images/scent_warm.png"),require("../../assets/images/scent_summer.png"),require("../../assets/images/scent_fall.png"),require("../../assets/images/scent_winter.png")]
        },
        {
          id:3,
          title:'Login & Register Site',
          date:'2022.12 ~ 2023.1',
          content:"ProjectCmt3",
          url:'https://github.com/odukong/React-Management/tree/master/tutoring',
          description:'로그인, 회원가입 기능을 간단하게 구현한 사이트',
          skill:'NodeJs, React, Material UI',
          pages:[['Login Page','아이디와 비밀번호를 이용해 로그인을 진행하는 페이지'],
                  ['Register Page','새롭게 아이디와 비밀번호를 등록하여 사이트에 가입하는 페이지']],
          imgUrl:[require("../../assets/images/sign_signin.png"),require("../../assets/images/sign_signup.png"),require("../../assets/images/sign_signinok.png"),require("../../assets/images/sign_signnook.png")]
        },
        {
          id:4,
          title:'Customer Management Site(Clone)',
          date:'2022.11 ~ 2022.12',
          content:"ProjectCmt4",
          url:'https://github.com/odukong/React-Management/tree/master/management',
          description:'고객을 추가하고 삭제하는 고객관리시스템 클론코딩 사이트',
          skill:'NodeJs, React, Material UI',
          pages:[['Registe Customer','고객에 대한 정보를 작성하여 고객 관리시스템에 등록한다'],
                  ['Delete Customer','고객관리시스템에 등록된 고객을 해당 시스템에서 삭제한다.']],
          imgUrl:[require("../../assets/images/manage_main.png"),require("../../assets/images/manage_create.png"),require("../../assets/images/manage_create2.png"),require("../../assets/images/manage_delete.png")]
        }
      ],
    };
  },
  methods: {
    contentChange(e) {
      const newIndex = parseInt(e.target.value);
      this.index = newIndex - 1;
    },
    checkId({id}){
      this.id=id;
      console.log(this.id)
      if(this.id=="ohbin"&&this.pwd=="1017"){
          this.isMatch=true
      }
    },    
    checkPwd({pwd}){
      this.pwd=pwd;
      console.log(this.pwd)
      if(this.id=="ohbin"&&this.pwd=="1017"){
          this.isMatch=true
      }
    },
  },
};
</script>

<style src="./Projects.css">
</style>
