import ButtonBase from '@material-ui/core/Button'
import React from 'react'
import useButtonStyles from './Button.styles'

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  const styles = useButtonStyles()

  return <ButtonBase className={styles.root}>{children}</ButtonBase>
}
