# hummingbird-app

For possible theme variables, see the docs:

[https://docs.wings.dev/docs/dev/hummingbird/config](https://docs.wings.dev/docs/dev/hummingbird/config)

## Using ENV vars to override themes:

For `design` use `GATSBY_APP_THEME`

For `footer` use `GATSBY_FOOTER_CONFIG`

For `typography` use `GATSBY_TYPOGRAPHY_CONFIG`

For web fonts use `GATSBY_WEBFONT_CONFIG:` JSON object. This object is passed to the options prop of [gatsby-plugin-web-font-loader](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/). For more info on how to use see [https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/) and [https://github.com/typekit/webfontloader](https://github.com/typekit/webfontloader). Don't forget to specify the loaded fonts in the `design` and `typography` Hummingbird options where necessary (e.g. `headerFontFamily`).`