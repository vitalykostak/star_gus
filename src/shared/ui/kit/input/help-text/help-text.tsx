import cn from 'classnames'
import { type FC, type PropsWithChildren } from 'react'

import { type Size } from '../types'

import styles from './help-text.module.scss'

interface HelpTextProps extends PropsWithChildren {
    isValid: boolean
    size: Size
}

export const HelpText: FC<HelpTextProps> = props => {
    const { isValid, children, size } = props

    return <p className={cn(styles.helpText, styles[size], !isValid && styles.error)}>{children}</p>
}
