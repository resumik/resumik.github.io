import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { primaryColor, secondaryColor } from '../../../styles/constants'

const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: secondaryColor,
      color: primaryColor,
      fontFamily: 'Raleway, sans-serif',
      fontSize: 12,
      border: '1px solid gray',
      '&:hover': {
        backgroundColor: primaryColor,
        color: secondaryColor,
        border: `1px solid ${primaryColor}`,
      },
    },
  })
)

export default useButtonStyles
