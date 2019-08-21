<template>
  <v-app id="inspire">
    <v-navigation-drawer width="200px" temporary v-model="drawer" app>
      <v-toolbar color="primary" dark>
        <v-list-item-title class="title">Bluefinance</v-list-item-title>
      </v-toolbar>
      <v-list dense>
        <v-list-item
          v-for="route in routes"
          :key="route.name"
          @click="drawer = false"
          router
          :to="route.path"
        >
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{route.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="!drawer">Bluefinance</v-toolbar-title>
      <v-col class="ml-10 mt-7" cols="12" md="4">
        <v-text-field light append-icon="search" single-line rounded flat solo></v-text-field>
      </v-col>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    routes: [
      { name: 'Dashboard', path: '/dashboard' },
      { name: 'Moedas', path: '/coins' },
      { name: 'Bitcoins', path: '/bitcoins' },
      { name: 'Bolsas', path: '/stocks' },
      { name: 'Ações', path: '/stock' },
    ],
  }),
};
</script>
