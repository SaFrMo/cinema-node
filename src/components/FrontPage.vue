<template>

    <main>
        <h1>Cinema-Node</h1>

        <ul class="dot-list">
            <li v-for="show in $root.currentData ? $root.currentData.shows : []">
                <router-link :to="`/${ show }`">
                    {{ capitalize(show) }}
                </router-link>
            </li>
        </ul>
    </main>

</template>

<script>
import titleCase from 'title-case'

export default {
    methods: {
        capitalize (target) {
            return titleCase(target)
        }
    }
}
</script>
