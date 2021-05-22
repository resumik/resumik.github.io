module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })
    return cfg
  },
  env: {
    APP_NAME: 'Resumik',
    GITHUB_REPO: 'https://github.com/resumik/resumik',
  },
}
