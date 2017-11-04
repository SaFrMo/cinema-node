<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="router-view"/>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            transitionName: 'slide-left'
        }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.length
            const fromDepth = from.path.length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }

}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.router-view {
    position: absolute;
    width: 100%;
}

/* Dot list - used in several places */
.dot-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
.dot-list a {
    text-transform: uppercase;
    background-color: #000;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    margin: 10px;
    border: 2px solid transparent;

    will-change: transform;
    transition: background-color 0.4s, color 0.4s, transform 0.4s, border 0.4s;
}
.dot-list a:hover,
.dot-list a:focus {
    background-color: #fff;
    border: 2px solid #000;
    color: #000;
    transform: scale(1.05);
    outline: none;
}

/* slide anims */
.slide-right-enter-active, .slide-right-leave-active,
.slide-left-enter-active, .slide-left-leave-active {
    transition: transform 0.55s;
}
.slide-right-enter,
.slide-left-leave-to {
    transform: translateX(-100vw);
}
.slide-right-leave-to,
.slide-left-enter {
    transform: translateX(100vw);
}

</style>
