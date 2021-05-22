import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useIndexStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
    },
  })
)

export default useIndexStyles
