<template>
    <div style="padding:3rem; background: black; color: white; display: flex;justify-content: center; align-items: center; height: 100vh;">
        <h3 class="p__content" style="font-size: 25px;margin-left:10%">로그인</h3>
        <table style="width: 30vw;margin-left:3rem">
            <tr>
            <td class="p__content" style="font-size: 18px;">아이디</td>
            <td>
                <input type="text" size="18" v-model="localId" @input="emitIdChange"/>
            </td>
            </tr>
            <tr>
            <td class="p__content" style="font-size: 18px;">비밀번호</td>
            <td>
                <input type="password" size="18" v-model="localPwd" @input="emitPwdChange"/>
            </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            localId: "", 
            localPwd: "", 
        };
    },
    methods:{
        emitIdChange() {
            this.$emit("changeId", { id: this.localId});
        },
        emitPwdChange() {
            this.$emit("changePwd", { pwd: this.localPwd});
        },
    }
};
</script>

<style scoped>
</style>