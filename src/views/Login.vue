<template>
  <div>
    <v-container>
      <v-layout justify-center row>
        <v-flex xs4>
          <v-card class="d-inline-flex pa-3">
            <v-text-field class="d-block" v-model="name" label="Novo usuário" required></v-text-field>
            <v-btn class="d-block mr-1 mt-3" small color="primary" @click="saveUser">
              <v-icon>add</v-icon>Salvar
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
    };
  },
  methods: {
    saveUser() {
      this.$store.commit('SAVE_USER', this.name);
    },
  },
};
</script>
