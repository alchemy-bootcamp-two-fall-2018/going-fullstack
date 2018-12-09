<template>
  <div class="modal" @click="onClose" @keyup.esc="onClose">
    <div class="content" @click.stop="">
      <button class="close" @click="onClose">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    onClose: Function
  },
  created() {
    this.documentListener = event => {
      if(event.keyCode === 27) {
        this.onClose();
      }
    };

    document.addEventListener('keyup', this.documentListener);
  },
  destroyed() {
    document.removeEventListener('keyup', this.documentListener);
  }
};
</script>

<style>

.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(86, 117, 104, .9);
}
.content {
  position: relative;
  background: #d5dfe5;
  padding: 40px;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>
