module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return cfg
  },
  env: {
    APP_NAME: 'Resumik',
    GITHUB_REPO: 'https://github.com/resumik/resumik',
  },
}
