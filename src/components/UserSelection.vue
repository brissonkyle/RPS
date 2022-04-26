<template>
    <div>
        <h3>Select your WEAPON !!</h3>
        <v-btn 
            
            color="primary">
            Rock
        </v-btn>
        <v-btn 
            
            color="primary">
            Paper
        </v-btn>
        <v-btn 
            
            color="primary">
            Scissors
        </v-btn>
        <p></p>
    </div>
</template>

<script>
    export default {
        name : 'UserSelection',
        data :() => {
            return {
                userScore : 0,
                oppScore : 0
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>