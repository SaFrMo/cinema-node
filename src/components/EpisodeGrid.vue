<template>

<main>
    <h1>{{ capitalize($route.params.show) }}</h1>

    <transition name="fade" mode="out-in">
        <div key="video" v-if="$route.params.episode">
            <router-link :to="`/${ $route.params.show }`">Back</router-link>
            <br/>
            <video :src="`/v1/shows${ $route.path }`" autoplay playsinline controls></video>
        </div>

        <div key="list" v-else>
            <ul class="dot-list">
                <li v-for="episode in $root.currentData.episodes">
                    <router-link :to="`${ $route.params.show }/${ episode.replace('.mp4', '') }`">
                        {{ capitalize(episode.replace('.mp4', '')) }}
                    </router-link>
                </li>
            </ul>
            <router-link to="/">Back</router-link>
        </div>
    </transition>
</main>

</template>

<script>

import titleCase from 'title-case'

export default {
    data () {
        return {
            selectedEpisode: ''
        }
    },
    methods: {
        capitalize (target) {
            return titleCase(target)
        }
    }
}
</script>

<style>
video {
    max-width: 100%;
    height: auto;
}

/* Fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s, transform 0.4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
