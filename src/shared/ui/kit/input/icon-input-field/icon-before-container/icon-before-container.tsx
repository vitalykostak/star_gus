import cn from 'classnames'
import { type FC, type PropsWithChildren } from 'react'

import { type Size } from '../../types'

import styles from './icon-before-container.module.scss'

interface IconBeforeContainerProps extends PropsWithChildren {
    size: Size
}

export const IconBeforeContainer: FC<IconBeforeContainerProps> = props => {
    const { size, children } = props

    return <div className={cn(styles.container, styles[size])}>{children}</div>
}
