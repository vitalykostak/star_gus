import cn from 'classnames'
import { type FC, type PropsWithChildren } from 'react'

import { type Size } from '../types'

import styles from './container.module.scss'

interface ContainerProps extends PropsWithChildren {
    align: 'vertical' | 'horizontal'
    size: Size
    className?: string
}

export const Container: FC<ContainerProps> = props => {
    const { children, align, size, className } = props

    return (
        <div className={cn(styles[align], align === 'vertical' && styles[size], className)}>
            {children}
        </div>
    )
}
