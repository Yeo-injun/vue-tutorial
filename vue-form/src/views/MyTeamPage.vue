<template>
    <div>
        <v-tabs centered>
            <!-- TODO router에 탭 추가시 CSS를 자연스럽게 먹이기 --> 
            <router-link to="/myTeams/test"><v-tab>팀원 조회</v-tab></router-link>
            <router-link to="/myTeams/members"><v-tab>팀기록 조회</v-tab></router-link>
        </v-tabs>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>