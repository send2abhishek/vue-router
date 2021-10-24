<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team member t2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },

  methods: {
    loadTeamMembers(route) {
      const teamId = route.params.teamId;
      const selectedTeam = this.teams.find((t) => t.id === teamId);
      if (selectedTeam) {
        const selectedMembers = selectedTeam.members;
        const selectedUsers = [];
        for (const member of selectedMembers) {
          const user = this.users.find((u) => u.id === member);
          selectedUsers.push(user);
        }
        this.teamName = selectedTeam.name;
        this.members = selectedUsers;
      }
    },
  },
  created() {
    //console.log(this.$route);
    this.loadTeamMembers(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.loadTeamMembers(newRoute);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>