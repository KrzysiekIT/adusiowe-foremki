<template>
  <div>
    <div class="forms_inputs">
      Średnica podstawowa:&nbsp;<input v-model="diameter.source" /><br>
      Średnica docelowa:&nbsp;<input placeholder="Średnica docelowa" v-model="diameter.target" />
    </div>
    <div class="forms__box">
      <textarea
        placeholder="Przepis"
        class="forms__text"
        v-model="recipe"
      ></textarea>
      <textarea class="forms__text" :value="newRecipe"></textarea>
    </div>
    <button @click="recipe = example">Przykładowy przepis</button>
  </div>
</template>

<script>
export default {
  computed: {
    newRecipe() {
      let newRecipe = JSON.parse(JSON.stringify(this.recipe));
      const r = /\d+/g;
      let m;
      const numbersArray = [];
      while ((m = r.exec(this.recipe)) != null) {
        numbersArray.unshift(m);
      }
      for (let i = 0; i < numbersArray.length; i++) {
        console.log(numbersArray[i][0].length, numbersArray[i]["index"]);
        newRecipe =
          newRecipe.slice(0, numbersArray[i]["index"]) +
          newRecipe.slice(
            numbersArray[i]["index"] + numbersArray[i][0].length,
            newRecipe.length
          );
        newRecipe =
          newRecipe.slice(0, numbersArray[i]["index"]) +
          parseInt(numbersArray[i][0]) *
            Math.pow(this.diameter.target / this.diameter.source, 2) +
          newRecipe.slice(numbersArray[i]["index"]);
      }
      console.log(numbersArray);
      return newRecipe;
    }
  },
  data() {
    return {
      recipe: "",
      diameter: {
        source: 1,
        target: 1
      },
      example:
        "makaron tagliatelle 400 gramów\nNaturalnie smaczne Spaghetti Bolognese Knorr 1 opakowanie\nmielona wołowina 400 gramów\nkrojone pomidory z puszki 1 opakowanie\nmozzarella 1 sztuka\nząbek czosnku 2 sztuki\nświeża bazylia 2 łyżki\nolej rzepakowy 1 łyżka"
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
  height: 80vh;
}
</style>
