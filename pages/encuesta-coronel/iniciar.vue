<template>
  <div class="py-32 bg-slate-100 h-fit lg:h-screen flex justify-center align-center">
    <div class="max-w-screen-xl mx-auto flex justify-center" :style="{
        padding: $vuetify.breakpoint.mobile ? '0% 8%' : '',
      }">
      <v-card flat class="w-full lg:w-5/12 p-8">
        <v-form v-if="!user_is_back" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="¿Cuál es tu nombre completo?"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Indica tu correo electrónico"
            required
          ></v-text-field>

          <v-select
            v-model="date_birth"
            :items="items"
            label="¿Cuál es tu año de nacimiento?"
            :rules="notNullRules"
            required
          ></v-select>

          <v-select
            v-model="genero"
            :items="generos"
            label="¿Con qué género te identificas?"
            :rules="notNullRules"
            required
          ></v-select>

          <v-radio-group v-model="habitante" row :rules="habitanteRules">
            <template v-slot:label>
                <div>¿Vives actualmente en Coronel?</div>
            </template>
            <div class="flex">
            <v-radio label="Si" :value="true"></v-radio>
            <v-radio label="No" :value="false"></v-radio>

            </div>
          </v-radio-group>

           <v-select
            v-model="sector"
            :items="sectores"
            :item-text="item => item.name"
            :item-value="item => item.id"
            label="¿En qué sector económico trabajas?"
            :rules="notNullRules"
            required
          ></v-select>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4 mt-6"
            @click="onSubmit"
            outlined
          >
            Comenzar
          </v-btn>
        </v-form>

        <div v-if="user_is_back" class="text-center">
          <p class="text-xl font-medium">Hola, nos da gusto tenerte de vuelta.</p>
          <span class="font-sans">
            ¿Quieres continuar con la encuesta donde la dejaste o prefieres ver los resultados actuales?
          </span>

          <div class="mt-8 flex flex-col space-y-4 align-center">
            <v-btn 
              color="success" 
              outlined 
              to="/encuesta-coronel/gamificacion"
            >
              Continuar
            </v-btn>

             <v-btn 
              color="primary" 
              outlined
              to="/encuesta-coronel/resultados"
            >
              Ver resultados
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        (v) => !!v || "Debes indicar tu nombre completo",
        (v) => /^[a-zA-Z\s]*$/.test(v) || "El nombre solo puede contener letras",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Debes indicar tu correo electrónico",
        (v) => /.+@.+\..+/.test(v) || "Formato de correo inválido",
      ],
      notNullRules: [
        (v) => v != null || "Este campo es obligatorio",
      ],
      habitanteRules: [
        (v) => v != null || "Debes indicar si vives o no en Coronel",
      ],
      date_birth: null,
      genero: null,
      habitante: null,
      sector: null,
      generos: ["Masculino", "Femenino", "Prefiero no decirlo", "Otro"],
      user_is_back: false,
    };
  },
  async asyncData({ store, $cookies }) {
    await store.dispatch('encuesta/loadSectores')


  },
  mounted() {
    const gec_user_id = this.$cookies.get('gec_user_id') || false

    if (gec_user_id) {
      this.user_is_back = true
    }
  },
  methods: {
    async onSubmit() {
        if (this.$refs.form.validate()) {

            const user_exists = await this.$store.dispatch('auth/userExists', this.email)


            if (!user_exists) {
              this.$store.dispatch('auth/createUser', {
                  name: this.name,
                  email: this.email,
                  password: window.btoa(this.email),
                  date_birth: this.date_birth,
                  genero: this.genero,
                  habitante: this.habitante,
                  sector: this.sector,
              })

              this.$router.push('/encuesta-coronel/gamificacion')
            }

            if (user_exists) {
              this.$store.dispatch('auth/login', {
                  email: this.email,
                  password: window.btoa(this.email),
              })

              this.user_is_back = true
            }
        }
    }
  },
  computed: {
    items() {
      const years = [];
      const thisYear = new Date().getFullYear() - 18;
      for (let i = 1930; i <= thisYear; i++) {
        years.push(i);
      }
      return years.sort((a, b) => b - a);
    },
    sectores() {
        return this.$store.state.encuesta.sectores
    }
  },
};
</script>

<style>
</style>