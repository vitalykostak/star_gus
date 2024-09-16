import cn from 'classnames'
import { type FC, type PropsWithChildren } from 'react'

import { type Size } from '../../types'

import styles from './icon-after-container.module.scss'

interface IconAfterContainerProps extends PropsWithChildren {
    size: Size
}

export const IconAfterContainer: FC<IconAfterContainerProps> = props => {
    const { size, children } = props

    return <div className={cn(styles.container, styles[size])}>{children}</div>
}
