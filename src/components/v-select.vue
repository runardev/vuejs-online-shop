<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">Select</p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selected: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      areOptionsVisible: false
    };
  },
  computed: {},
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  }
};
</script>

<style lang="scss">
.v-select {
  box-sizing: border-box;
  position: relative;
  width: 200px;
  .title {
    cursor: pointer;
    border: solid 1px #aeaeae;
  }
  p {
    margin: 0;
  }
  .options {
    box-sizing: border-box;
    border: solid 1px #aeaeae;
    position: absolute;
    top: 20px;
    right: 0;
    width: 100%;
    background-color: #fff;
    p {
      cursor: pointer;
      &:hover {
        background-color: #e7e7e7;
      }
    }
  }
}
</style>
