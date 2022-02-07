<template>
  <post-wrapper>
    <post-title :night="night">
      {{content.title}}
    </post-title>
    <post-text :night="night">
      {{content.body}}
    </post-text>
  </post-wrapper>
</template>

<script>
import Vue from 'vue';

import PostWrapper from '@/components/elements/Post/PostWrapper';
import PostTitle from '@/components/elements/Post/PostTitle';
import PostText from '@/components/elements/Post/PostText';

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
    PostWrapper,
    PostTitle,
    PostText,
  },
});
</script>
