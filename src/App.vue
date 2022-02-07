<template>
  <main-element :night="nightTheme">
    <wrapper-element :night="nightTheme">
      <Header :night="nightTheme" @themeToggle="nigthThemeToggle"/>
      <Post
        :night="nightTheme"
        v-for="post in posts"
        :key="post.id"
        :content="post"
      />
    </wrapper-element>
  </main-element>
</template>

<script lang="ts">
import Vue from 'vue';
import MainElement from './components/elements/MainElement';
import WrapperElement from './components/elements/WrapperElement';
import Header from './components/Header.vue';
import Post from './components/Post.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Post,
    MainElement,
    WrapperElement,
  },
  data() {
    return {
      nightTheme: false,
      posts: [],
    };
  },
  methods: {
    nigthThemeToggle() {
      this.nightTheme = !this.nightTheme;
    },
  },
  async mounted() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.posts = json;
      });
  },
});
</script>
