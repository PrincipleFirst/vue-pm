<template>
  <label class="error" :class="{'is-visible':passWordNoPass}">{{passWordErr}}</label>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  export default {
    data() {
      return {
        userName: null,
        userNameErr: null,
        userNameNoPass: false,
        phoneNum: null,
        phoneNumErr: null,
        phoneNumNoPass: false,
        passWord: null,
        passWordErr: null,
        passWordNoPass: false,
      }
    }
  }
</style>
