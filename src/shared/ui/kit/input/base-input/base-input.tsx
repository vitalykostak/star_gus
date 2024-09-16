import { type FC, type InputHTMLAttributes } from 'react'

import { type LabelPosition, type Size, type Variant } from '../types'

import { BaseInputSide } from './base-input-side'
import { BaseInputTop } from './base-input-top'

export interface BaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: Size
    label?: string
    labelPosition?: LabelPosition
    quiet?: boolean
    variant?: Variant
    required?: boolean
    isValid?: boolean
    helpText?: string
    disabled?: boolean
    iconBefore?: never
    iconAfter?: never
}

export const BaseInput: FC<BaseInputProps> = props => {
    const {
        className,
        label,
        helpText,
        size = 'md',
        labelPosition = 'top',
        quiet = false,
        variant = 'fill',
        required = false,
        isValid = true,
        disabled = false,
        ...inputProps
    } = props

    if (labelPosition === 'top') {
        return (
            <BaseInputTop
                label={label}
                size={size}
                quiet={quiet}
                variant={variant}
                required={required}
                isValid={isValid}
                disabled={disabled}
                helpText={helpText}
                {...inputProps}
            />
        )
    }

    return (
        <BaseInputSide
            label={label}
            size={size}
            quiet={quiet}
            variant={variant}
            required={required}
            isValid={isValid}
            disabled={disabled}
            {...inputProps}
        />
    )
}
