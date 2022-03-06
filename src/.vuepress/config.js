const { description } = require('../../package')
var getChildren = require('./scripts/sidebar-children')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: description,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebar: {
      '/recipes/': [
        {
          title: 'Recipes',
          collapsable: false,
          children: getChildren('./src/recipes')
        }
      ],
    }
  }
}
