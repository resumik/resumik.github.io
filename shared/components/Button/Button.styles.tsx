import { createStyles, makeStyles, Theme, withTheme } from '@material-ui/core'
import { primaryColor, secondaryColor } from '../../../styles/constants'

const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: secondaryColor,
      color: primaryColor,
      fontFamily: 'Raleway, sans-serif',
      border: `1px solid ${primaryColor}`,
      fontSize: 12,
      '&:hover': {
        backgroundColor: primaryColor,
        color: secondaryColor
      },
    },
  })
)

export default useButtonStyles
