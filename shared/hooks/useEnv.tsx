interface Env {
  appName: String
  githubRepo: string
}

const useEnv = () => {
  const env: Env = {
    appName: process.env.APP_NAME,
    githubRepo: process.env.GITHUB_REPO,
  }

  return env
}

export default useEnv
