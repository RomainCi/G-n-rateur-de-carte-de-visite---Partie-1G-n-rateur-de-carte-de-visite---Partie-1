let Objecte = {
  data() {
    return {
      titre: "Carte de visite",
      prenom: "romain",
      nom: "ciszewicz",
      societe: "bocal",
      poste: "clow",
      tel: "0606060606",
      email: "jesuispas@gmail.com",
      titleClass: "main-title",
      verte: "carteVisite",
      valeur: bob,
      inside: "prenom",
      readonly: true,
      lol: false,
      toto: zaza,
    };
  },
  template: `<h1 v-bind:class="titleClass">{{titre}}</h1>
            <p :class="verte">nom:{{nom}} </p>
            <p :class="verte">prenom:{{prenom}}</p>
            <p :class="verte">nom de societe: {{societe}}</p>
            <p :class="verte">poste: {{poste}}</p>
            <p :class="verte">email: {{email}}</p>
            <p :class="verte">tel {{tel}}</p>
            <input :value="valeur" :placeholder="inside" :readonly="readonly"/>
            <button @click="valeur = toto ">Click</button>
            <button @click="readonly = lol">deverouille</button>
            <button @click="readonly = readonly">verouiller</button>`,
};
let bob = "arthur";
let zaza = "romain";

Vue.createApp(Objecte).mount("#root");
