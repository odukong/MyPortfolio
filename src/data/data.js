import Project1 from '../component/Projects/Project1';
import Project2 from '../component/Projects/Project2';
import Project3 from '../component/Projects/Project3';
import Project4 from '../component/Projects/Project4';
import images from "./images";
const projects=[
    {
        id:1,
        title:'K-DUCK',
        content:(<Project1/>),
        date:'2023.9 ~',
        url:'https://github.com/odukong/K-DUCK',
        description:'K-POP 덕질을 위한 사이트',
        skill:'React, Bootstrap, CSS',
        pages:[['Artist Page','K-POP 아이돌들에 대한 정보를 모아볼 수 있는 페이지'],
                ['Board Page','콘서트 리뷰, 홍보게시판과 같이 팬들과 이야기를 나눌 수 있는 페이지'],
                ['Sale Page','굿즈를 사고팔 수 있는 페이지']],
        imgUrl:[images.kduckMain1,images.kduckMain2,images.kduckArtist,images.kduckBoard,images.kduckBoardDetail,images.kduckSale]
    },
    {
        id:2,
        title:'Scent\'s talk',
        content:(<Project2/>),
        date:'2023.7 ~ 2023.8',
        url:'https://github.com/odukong/Scents-talk',
        description:'퍼스널 컬러를 잇는 퍼스널 향수를 추천해주는 사이트',
        skill:'HTML, CSS, JavaScript',
        pages:[['Scents\'s talk Reason','Scent\'s talk 사이트의 존재 의의에 대한 설명 섹션'],
                ['Scents\'s talk Mean','Scent\'s talk 라는 사이트 이름의 의미를 해석하는 섹션'],
                ['Personal Scents','각 퍼스널 컬러, 계절감에 맞는 향수를 추천하는 섹션']],
        imgUrl:[images.scentReason,images.scentMean,images.scentWarm,images.scentSummer,images.scentFall,images.scentWinter]
    },
    {
        id:3,
        title:'Login & Register Site',
        content:(<Project3/>),
        date:'2022.12 ~ 2023.1',
        url:'https://github.com/odukong/React-Management/tree/master/tutoring',
        description:'로그인, 회원가입 기능을 간단하게 구현한 사이트',
        skill:'NodeJs, React, Material UI',
        pages:[['Login Page','아이디와 비밀번호를 이용해 로그인을 진행하는 페이지'],
                ['Register Page','새롭게 아이디와 비밀번호를 등록하여 사이트에 가입하는 페이지']],
        imgUrl:[images.signSignIn,images.signSignUp,images.signSignInOk,images.signSignInNoOk]
    },
    {
        id:4,
        title:'Customer Management Site(Clone)',
        content:(<Project4/>),
        date:'2022.11 ~ 2022.12',
        url:'https://github.com/odukong/React-Management/tree/master/management',
        description:'고객을 추가하고 삭제하는 고객관리시스템 클론코딩 사이트',
        skill:'NodeJs, React, Material UI',
        pages:[['Registe Customer','고객에 대한 정보를 작성하여 고객 관리시스템에 등록한다'],
                ['Delete Customer','고객관리시스템에 등록된 고객을 해당 시스템에서 삭제한다.']],
        imgUrl:[images.manageMain,images.manageCreate,images.manageCreate2,images.manageDelete]
    }
]

export default projects;