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
                <li class="project-grid-group__item">
                  <div class="project-grid-card__component project-grid-group__card personal-portal__project-grid-card"
                       style="background-image: url(&quot;https://striker.teambition.net/thumbnail/110j5f4de30506e2b1f81b34cdfd1e7fb796/w/600/h/300&quot;);">
                    <div class="project-grid-card__header">
                      <div class="project-grid-card__header__top"><span class="project-grid-card__name hinted"
                                                                        data-title="产品进展">产品进展</span><span
                        class="project-grid-card__hidden-handlers"><a
                        class="project-grid-card__hidden-handlers__item project-grid-card__edit-handler hinted"
                        data-title="打开项目设置"><span class="icon icon-pencil"></span></a><a
                        class="project-grid-card__hidden-handlers__item project-grid-card__star-handler hinted"
                        data-title="星标"><span class="icon icon-star"></span></a></span></div>
                      <div class="project-grid-card__header__bottom"></div>
                    </div>
                    <div class="project-grid-card__footer"></div>
                    <div class="project-grid-card__shadow"></div>
                  </div>
                  <div class="project-grid-group__mask"></div>
                </li>
                <li class="project-grid-group__item">
                  <div class="project-grid-add-card__component project-grid-group__card personal-portal__project-grid-card">
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
import MHeader from 'components/header/header'

export default {
  components: {
    MHeader
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
