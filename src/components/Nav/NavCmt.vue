<template>
    <div :class="['app__navbar', toggleMenu && 'show']">
        <div class="app__navbar-smallscreen-overlay">
            <ul class="app__navbar-smallscreen-links">
            <li class="app__navbar-smallscreen-items">
                <font-awesome-icon :icon="['fas', 'door-closed']" style="color: #383838;font-size: 30;" />
                <div v-if="toggleMenu" class="app__navbar-smallscreen-item p__title">
                    <router-link to="/">Home</router-link>
                </div>
            </li>
            <li class="app__navbar-smallscreen-items">
                <font-awesome-icon :icon="['fas', 'note-sticky']" style="color: #383838;font-size: 30;"/>
                <div v-if="toggleMenu" class="app__navbar-smallscreen-item p__title">
                    <router-link to="/project">&nbsp;Project</router-link>
                </div>
            </li>
            <li class="app__navbar-smallscreen-items">
                <font-awesome-icon :icon="['fas', 'book-open']" style="color: #383838;font-size: 30;" />
                <div v-if="toggleMenu" class="app__navbar-smallscreen-item p__title">
                    <router-link to="/career">Career</router-link>
                </div>
            </li>
            </ul>
        </div>
        <template v-if="toggleMenu">
            <font-awesome-icon :icon="['fas', 'x']" style="color:white;font-size: 30;margin-top: 10px;" @click="handleToggleMenu"/>
        </template>
        <template v-else>
            <font-awesome-icon :icon="['fas', 'bars']" style="color: white;font-size: 30;margin-top: 10px;" @click="handleToggleMenu"/>
        </template>
    </div>
</template>

<script>

export default {
    data() {
        return {
            toggleMenu: false,
        };
    },
    methods: {
        handleToggleMenu() {
            this.toggleMenu = !this.toggleMenu;
            console.log(this.toggleMenu);
        },
    },
};
</script>

<style src="./Nav.css">
</style>
