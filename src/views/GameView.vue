<template>
    <div>
        <OppSelection/>
        <UserSelection/>
        <ScoreBoard/>
    </div>
</template>

<script>
import OppSelection from '@/components/OppSelection.vue'
import UserSelection from '@/components/UserSelection.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
    export default {
        components: { OppSelection, UserSelection, ScoreBoard },
        name : 'GameView',
        
    }
</script>

<style lang="scss" scoped>

</style>