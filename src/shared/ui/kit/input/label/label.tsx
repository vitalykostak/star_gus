import cn from 'classnames'
import { type FC, type PropsWithChildren } from 'react'

import { type Size } from '../types'

import styles from './label.module.scss'

interface LabelProps extends PropsWithChildren {
    size: Size
    required: boolean
    disabled: boolean
    truncate?: boolean
}

export const Label: FC<LabelProps> = props => {
    const { children, size, required, disabled, truncate } = props

    return (
        <p
            className={cn(
                styles.label,
                styles[size],
                disabled && styles.disabled,
                truncate && styles.textTruncate,
            )}
        >
            {children}
            {required ? <span className={styles.required}> *</span> : ''}
        </p>
    )
}
