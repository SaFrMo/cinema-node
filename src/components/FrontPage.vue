<template>

    <main>
        <h1>Cinema-Node</h1>

        <ul>
            <li v-for="show in shows">
                <router-link :to="`/${ show }`">
                    {{ capitalize(show) }}
                </router-link>
            </li>
        </ul>
    </main>

</template>

<script>
import _get from 'lodash/get'
import titleCase from 'title-case'

export default {
    async mounted () {
        // try to fetch from state cache
        this.$store.dispatch('FETCH_PATH', { hostPath: this.$route.path, targetPath: 'shows' })
    },
    computed: {
        shows () {
            return _get(this.$store, `state.cache[${this.$route.path}].data.shows`)
        }
    },
    methods: {
        capitalize (target) {
            return titleCase(target)
        }
    }
}
</script>

<style scoped>

ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
li a {
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
li a:hover,
li a:focus {
    background-color: #fff;
    border: 2px solid #000;
    color: #000;
    transform: scale(1.05);
    outline: none;
}

</style>
