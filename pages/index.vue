<template>
  <div>
    <div class="forms_inputs">
      <input placeholder="Średnica foremki" />
      <input placeholder="Średnica docelowa" />
    </div>
    <div class="forms__box">
      <textarea class="forms__text" v-model="recipe"></textarea>
      <textarea class="forms__text" :value="newRecipe"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newRecipe() {
      return this.recipe;
    }
  },
  data() {
    return {
      recipe: ""
    };
  }
};
</script>

<style>
.forms {
  display: flex;
}
.forms__box {
  display: flex;
}
.forms__text {
  resize: none;
  width: 50%;
}
</style>
