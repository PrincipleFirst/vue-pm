<template>
  <div>
    <m-header></m-header>
    <div id="content" class="clearfix">
      <div class="personal-portal-view">
        <div data-reactroot="" class="personal-portal__component">
          <div class="project-section__component">
            <div class="project-section__header">
              <div class="project-section__header__left">
                <div class="project-section__header__left__title"><span>我拥有的项目</span></div>
              </div>
              <div class="project-section__header__right"></div>
            </div>
            <ul class="project-grid-group__component">
              <li class="project-grid-group__item" v-for="item in projects">
                <div class="project-grid-card__component project-grid-group__card personal-portal__project-grid-card"
                     :style="{backgroundImage: 'url('+item.logo+')'}">
                  <div class="project-grid-card__header">
                    <div class="project-grid-card__header__top">
                      <span class="project-grid-card__name hinted" :data-title="item.name">{{item.name}}</span>
                      <span class="project-grid-card__hidden-handlers">
                        <a class="project-grid-card__hidden-handlers__item project-grid-card__edit-handler hinted" data-title="打开项目设置">
                          <span class="icon icon-pencil"></span></a>
                        <a class="project-grid-card__hidden-handlers__item project-grid-card__star-handler hinted" data-title="星标">
                          <span class="icon icon-star"></span>
                        </a>
                      </span>
                    </div>
                    <div class="project-grid-card__header__bottom"></div>
                  </div>
                  <div class="project-grid-card__footer"></div>
                  <div class="project-grid-card__shadow"></div>
                </div>
                <div class="project-grid-group__mask"></div>
              </li>
              <li class="project-grid-group__item">
                <div
                  class="project-grid-add-card__component project-grid-group__card personal-portal__project-grid-card">
                  <a class="project-grid-add-card__handler"><span class="icon icon-circle-cross"></span><span
                    class="project-grid-add-card__handler__text">创建新项目</span></a></div>
              </li>
            </ul>
          </div>
          <div class="project-section__component" data-role="archive">
            <div class="project-section__header">
              <div class="project-section__header__left">
                <div class="project-section__header__left__title"><span>已归档的项目</span></div>
                <div class="project-section__left-toolbar"><a>显示</a></div>
              </div>
              <div class="project-section__header__right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'static/css/teambition.css'
  import MHeader from 'components/header/header'
  import { getProjects } from 'api/projects'

  export default {
    data() {
      return {
        projects: []
      }
    },
    created() {
      this._getProjects()
    },
    methods: {
      _getProjects() {
        getProjects().then((res) => {
          if (res.code === 0) {
            this.projects = res.data
          }
        })
      }
    },
    components: {
      MHeader
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
