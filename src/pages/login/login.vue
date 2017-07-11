<template>
  <div>
    <div class="index-main">
      <div class="index-main-body">
        <div class="index-header">
          <h1 class="subtitle">团队协作</h1>
        </div>

        <div class="desk-front sign-flow clearfix sign-flow-simple">

          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="注册" name="first">
              <div class="view view-signup selected" data-za-module="SignUpForm" style="display: block;">
                <form class="zu-side-login-box" action="/register/email" id="sign-form-1" autocomplete="off"
                      method="POST" novalidate="novalidate">
                  <input type="password" hidden="">
                  <input type="hidden" name="_xsrf" value="3a2da72b2a333ca1d0dd383de04b1d5a">
                  <div class="group-inputs">


                    <div class="name input-wrapper">
                      <input required="" type="text" name="fullname" aria-label="姓名" placeholder="姓名"
                             v-model="userName" @focus="fadeOut">
                      <label class="error" :class="{'is-visible':userNameNoPass}">{{userNameErr}}</label>
                    </div>
                    <div class="email input-wrapper">

                      <input required="" type="text" class="account" name="phone_num" aria-label="手机号（仅支持中国大陆）"
                             placeholder="手机号（仅支持中国大陆）" v-model="phoneNum" @focus="fadeOut">
                      <label class="error" :class="{'is-visible':phoneNumNoPass}">{{phoneNumErr}}</label>
                    </div>

                    <div class="input-wrapper">
                      <input required="" type="password" name="password" aria-label="密码" placeholder="密码（不少于 6 位）"
                             autocomplete="off" v-model="passWord" @focus="fadeOut">
                      <label class="error" :class="{'is-visible':passWordNoPass}">{{passWordErr}}</label>
                    </div>

                    <div class="Captcha input-wrapper" data-type="cn" data-za-module="Captcha">
                      <div class="Captcha-operate">
                        <input type="hidden" name="captcha" required="" data-rule-required="true"
                               data-msg-required="请点击图中所有倒立的文字" value="">
                        <input type="hidden" name="captcha_type" value="cn" required="">
                        <label class="Captcha-prompt">请点击图中所有倒立的文字</label>
                        <span class="Captcha-refresh js-refreshCaptcha sprite-index-icon-refresh"></span>
                      </div>
                      <div class="Captcha-imageConatiner">
                        <img class="Captcha-image" alt="验证码">
                      </div>
                    </div>

                  </div>
                  <div class="button-wrapper command">
                    <button class="sign-button submit" type="button" @click="register">注册</button>
                  </div>
                </form>
              </div>
            </el-tab-pane>
            <el-tab-pane label="登录" name="second">
              <div class="view view-signin" data-za-module="SignInForm" style="display: block;">
                <form method="POST" novalidate="novalidate">
                  <input type="hidden" name="_xsrf" value="3a2da72b2a333ca1d0dd383de04b1d5a">
                  <div class="group-inputs">

                    <div class="account input-wrapper">

                      <input type="text" name="account" aria-label="手机号或邮箱" placeholder="手机号或邮箱" required="">
                    </div>
                    <div class="verification input-wrapper">
                      <input type="password" name="password" aria-label="密码" placeholder="密码" required="">
                      <button type="button" class="send-code-button">获取验证码</button>
                    </div>

                    <div class="Captcha input-wrapper" data-type="cn" data-za-module="Captcha">
                      <div class="Captcha-operate">
                        <input type="hidden" name="captcha" required="" data-rule-required="true"
                               data-msg-required="请点击图中所有倒立的文字" value="">
                        <input type="hidden" name="captcha_type" value="cn" required="">
                        <label class="Captcha-prompt">请点击图中所有倒立的文字</label>
                        <span class="Captcha-refresh js-refreshCaptcha sprite-index-icon-refresh"></span>
                      </div>
                      <div class="Captcha-imageConatiner">
                        <img class="Captcha-image" alt="验证码">
                      </div>
                    </div>

                  </div>
                  <div class="button-wrapper command">
                    <button class="sign-button submit" type="submit"@click="login()">登录</button>
                  </div>
                </form>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

    </div>
    <div id="particles"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  /* eslint-disable no-undef,no-unused-vars */
  import 'static/css/login.css'
  import particles from 'particles.js'
  import is from 'is_js'
  export default {
    data() {
      return {
        activeName: 'first',
        isPass: false,
        userName: null,
        userNameErr: null,
        userNameNoPass: false,
        phoneNum: null,
        phoneNumErr: null,
        phoneNumNoPass: false,
        passWord: null,
        passWordErr: null,
        passWordNoPass: false,
        regButtonIsPass: true
      }
    },
    computed: {
      // 判断手机号码
      rightPhoneNumber: () => /^1\d{10}$/gi.test(this.phoneNumber)
    },
    methods: {
      handleClick(tab, event) {

      },
      register() {
        console.log(this.passWord)
        if (!this.userName) {
          this.userNameNoPass = true
          this.userNameErr = '请填写姓名'
        }
        if (this.phoneNum) {
          if (!this.rightPhoneNumber) {
            this.phoneNumNoPass = true
            this.phoneNumErr = '请输入正确手机号'
          }
        } else {
          this.phoneNumNoPass = true
          this.phoneNumErr = '请填写手机号'
        }
        if (!this.passWord) {
          this.passWordNoPass = true
          this.passWordErr = '请填写密码'
        }
      },
      login() {
        this.$router.push('/home')
        return
      },
      fadeOut(el) {
        console.log(el.target)
        console.log(el.target.name)
        let inputName = el.target.name
        let errTipClass = el.target.nextSibling.nextSibling.classList
        if (errTipClass.contains('is-visible')) {
          if (inputName === 'fullname') {
            this.userNameNoPass = false
          }
          if (inputName === 'phone_num') {
            this.phoneNumNoPass = false
          }
          if (inputName === 'password') {
            this.passWordNoPass = false
          }
        }
      }
    },
    mounted() {
      particlesJS('particles', {
        'particles': {
          'number': {
            'value': 20,
            'density': {
              'enable': true,
              'value_area': 1000
            }
          },
          'color': {
            'value': '#e1e1e1'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 15,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 180,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 650,
            'color': '#cfcfcf',
            'opacity': 0.26,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 2,
            'direction': 'none',
            'random': true,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 400,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 400,
              'size': 40,
              'duration': 2,
              'opacity': 8,
              'speed': 3
            },
            'repulse': {
              'distance': 200,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-tabs__header
    border-bottom hidden

  .el-tabs__nav
    float none

  .el-tabs__active-bar
    left 78px

  .el-tabs__item
    font-size 18px
    width 4em
</style>
