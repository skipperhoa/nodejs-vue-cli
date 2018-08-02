<template>
  <v-app>
      <v-toolbar dark>
        <v-toolbar-side-icon  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title><router-link :to="{name:'Home'}">HoanguyenIT</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" >
          <v-btn flat v-for="(menu,index) in items" :key="index">
            <router-link :to="{name:'Category',params:{tag:menu.link_tag}}">
          {{menu.title}}</router-link>
           
           </v-btn>
          <v-btn flat> <a href="https://www.facebook.com/Hoanguyenit-1470198193093022/">FACEBOOK</a></v-btn>
        </v-toolbar-items>
      </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      light
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Skipperhoa</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> <router-link :to="{name:'Category',params:{tag:item.link_tag}}">
          {{item.title}}</router-link></v-list-tile-title>
           
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>trip_origin</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> <a href="https://www.facebook.com/Hoanguyenit-1470198193093022/">FACEBOOK</a></v-list-tile-title>
           
          </v-list-tile-content>
        </v-list-tile>
  

      </v-list>
    </v-navigation-drawer>

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
       <v-footer app height="auto" dark>
        <v-layout
          justify-center
          row
          wrap
        >
          <v-flex
            primary
            lighten-2
            py-3
            text-xs-center
            white--text
            xs12
          >
            &copy;2018 — <strong>Hoanguyenit</strong>
          </v-flex>
    </v-layout>
  </v-footer>
</v-app>
</template>
<style>
.v-btn__content>a{
  color:#fff;
}
.v-list__tile__title>a{
  color:#000;
}
.v-toolbar__title>a{color:#fff;}
</style>
<script>

  export default {
    data () {
      return {
        drawer: null,
        items: [
          // { title: 'Home', icon: 'dashboard',link_tag:'home' },
          { title: 'HTML/CSS', icon: 'trip_origin',link_tag:'html-css'},
          { title: 'JAVASCRIPT/JQUERY', icon: 'trip_origin',link_tag:'javacript-jquery' },
          { title: 'PHP/OOP', icon: 'trip_origin',link_tag:'php-oop' },
          { title: 'CODEIGNITER', icon: 'trip_origin',link_tag:'codeigniter' },
          { title: 'LARAVEL 5', icon: 'trip_origin',link_tag:'laravel-5' },
          { title: 'NODEJS', icon: 'trip_origin',link_tag:'nodejs' },
          { title: 'VUEJS', icon: 'trip_origin',link_tag:'vuejs'},
          { title: 'ANGURAJS', icon: 'trip_origin',link_tag:'angularjs' },
          
        ],
        mini: false,
        right: null
      }
    }
  }
</script>
