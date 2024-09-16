import cn from 'classnames'
import { type FC, type InputHTMLAttributes } from 'react'

import { type Size, type Variant } from '../types'

import styles from './input-field.module.scss'

interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size: Size
    quiet: boolean
    variant: Variant
    isValid: boolean
    disabled: boolean
    minimal?: boolean
}

export const InputField: FC<InputFieldProps> = props => {
    const { size, variant, quiet, isValid, className, minimal, ...inputProps } = props

    return (
        <input
            {...inputProps}
            className={cn(
                styles.input,
                styles[size],
                styles[variant],
                quiet && styles.quiet,
                !isValid && styles.error,
                minimal && styles.minimal,
                className,
            )}
        />
    )
}
