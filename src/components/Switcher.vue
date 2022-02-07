<template>
  <checkbox-wrapper>
    <check-box input type="checkbox" id='night' @change="checkedToggle"/>
    <checkbox-label for='night'/>
  </checkbox-wrapper>
</template>

<script lang="ts">
import Vue from 'vue';
import CheckBox from '@/components/elements/Switcher/CheckBox';
import CheckboxLabel from '@/components/elements/Switcher/CheckboxLabel';
import CheckboxWrapper from '@/components/elements/Switcher/CheckboxWrapper';

export default Vue.extend({
  name: 'SwitcherComponent',
  components: {
    CheckboxWrapper,
    CheckboxLabel,
    CheckBox,
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    checkedToggle() {
      this.checked = !this.checked;
      this.$emit('switchEvent');
    },
  },
});
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
</style>
