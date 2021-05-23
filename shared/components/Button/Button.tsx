import ButtonBase from '@material-ui/core/Button'
import React from 'react'
import withAnchor from '../../hoc/withAnchor'
import useButtonStyles from './Button.styles'

export const Button: React.FC = ({ children }) => {
  const styles = useButtonStyles()

  return <ButtonBase className={styles.root}>{children}</ButtonBase>
}

export const AnchorButton: any = React.forwardRef(({ children, ...props }, ref) => {
  const ButtonWithAnchor = withAnchor(Button)

  return <ButtonWithAnchor ref={ref} {...props}>{children}</ButtonWithAnchor>
})
