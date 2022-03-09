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
  methods: {
    change: function () {
      if (this.readonly == false) {
        this.readonly = true;
        console.log("false");
      } else {
        this.readonly = false;
        console.log("true");
      }
    },
  },
  template: `<h1 v-bind:class="titleClass">{{titre}}</h1>
            <p :class="verte">nom:{{nom}} </p>
            <p :class="verte">prenom:{{prenom}}</p>
            <p :class="verte">nom de societe: {{societe}}</p>
            <p :class="verte">poste: {{poste}}</p>
            <p :class="verte">email: {{email}}</p>
            <p :class="verte">tel {{tel}}</p>
            <input class="ah" :placeholder="inside" :readonly="readonly"/>
            <button @click="ah = change()">deverouille</button>`,
};
let bob = "arthur";
let zaza = "romain";
console.log("hello");
Vue.createApp(Objecte).mount("#root");
