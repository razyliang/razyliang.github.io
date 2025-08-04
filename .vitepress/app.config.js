export default function (mode) {
  const isDevelopment = mode == 'development'

  let head = [
  ]

  if( !isDevelopment ) {
  }

  let config = {
    lang: 'zh-CN',
    title: '',
    titleTemplate: ':title',
    description: '',
    head: head,
    themeConfig: {
      logo: {
      },
      footer: {
      },
    },
  }
  return config
}