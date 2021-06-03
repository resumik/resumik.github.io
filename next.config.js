const withMDX = require('@next/mdx')({
  extension: /\.mdx|md$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  env: {
    APP_NAME: 'Resumik',
    GITHUB_REPO: 'https://github.com/resumik/resumik',
  },
})
