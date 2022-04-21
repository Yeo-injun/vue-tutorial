<template>

    <div>
        <ManagerList/>
        <MyProfile/>
        <TeamMemberList/>

    </div>
</template>

<script>
    import ManagerList from '@/views/myTeam/components/ManagerList.vue';
    import MyProfile from '@/views/myTeam/components/MyProfile.vue';
    import TeamMemberList from '@/views/myTeam/components/TeamMemberList.vue';

    export default {
        components: {
            ManagerList,
            MyProfile,
            TeamMemberList,
        }
    }
</script>

<style lang="scss" scoped>

</style>