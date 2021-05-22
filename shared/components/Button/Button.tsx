import ButtonBase from '@material-ui/core/Button'
import React from 'react'
import useButtonStyles from './Button.styles'

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = () => {
  const styles = useButtonStyles()

  return <ButtonBase className={styles.root}>cze</ButtonBase>
}
