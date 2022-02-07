<template>
  <div>
    <header-title :night="night">Overreacted
      <Switcher @switchEvent="changeTheme" />
    </header-title>

    <header-wrapper>
      <header-avatar src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"  />
      <header-text :night="night">
        Personal blog by
        <header-link >Dan Abramov</header-link>
      </header-text>
      <header-text :night="night">I explain with words and code.</header-text>
    </header-wrapper>
    <!-- <HeaderLink></HeaderLink> -->
  </div>
</template>

<script>
import Vue from 'vue';

import HeaderLink from '@/components/elements/Header/HeaderLink';
import HeaderTitle from '@/components/elements/Header/HeaderTitle';
import HeaderText from '@/components/elements/Header/HeaderText';
import HeaderAvatar from '@/components/elements/Header/HeaderAvatar';
import HeaderWrapper from '@/components/elements/Header/HeaderWrapper';
import Switcher from '@/components/Switcher.vue';

export default Vue.extend({
  props: {
    night: {
      type: Boolean,
    },
    content: {
      Object,
    },
  },
  components: {
    Switcher,
    HeaderText,
    HeaderAvatar,
    HeaderLink,
    HeaderTitle,
    HeaderWrapper,
  },
  methods: {
    changeTheme() {
      this.$emit('themeToggle');
    },
  },
});
</script>
