<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <router-link :to="teamMemberLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    teamMemberLink() {
      // return '/teams/' + this.id;
      // this will usseful when you change the path of the route it will still work because we modified the route path not name
      // same you can use route push() method too
      // always prefer named routes instead of path routes
      // also you can pass the query params if you need. query params is always optional
      return {
        name: 'team-members',
        params: {
          teamId: this.id,
        },
        query: {
          sort: 'asc',
          data: 'latest',
        },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>