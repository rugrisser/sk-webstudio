<template>
  <div class="person">
    <NavigationBar />
    <div>
      <div
        v-for="(person, index) in persons"
        :key="index">
        {{ person.name }}
      </div>
    </div>
  </div>
</template>

<script>
  import NavigationBar from "@/components/NavigationBar";

  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  export default {
    name: "Person",
    components: {NavigationBar},
    data() {
      return {
        persons: [
          new Person()
        ]
      }
    }
  }
</script>

<style scoped>

</style>