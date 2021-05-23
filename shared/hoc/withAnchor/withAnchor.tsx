import React, { Ref } from 'react'

export const withAnchor =
  (Component: any): React.FC<any> =>
  ({ children, ...props }: any): JSX.Element => {
    console.log(Component)
    return (
      <a {...props}>
        <Component>{children}</Component>
      </a>
    )
  }
