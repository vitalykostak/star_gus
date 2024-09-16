import { type FC, type InputHTMLAttributes, type SVGProps } from 'react'

import { type LabelPosition, type Size, type Variant } from '../types'

import { IconInputSide } from './icon-input-side'
import { IconInputTop } from './icon-input-top'

export interface IconInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: Size
    label?: string
    labelPosition?: LabelPosition
    quiet?: boolean
    variant?: Variant
    required?: boolean
    isValid?: boolean
    helpText?: string
    disabled?: boolean
    IconBefore?: FC<SVGProps<SVGSVGElement>>
    IconAfter?: FC<SVGProps<SVGSVGElement>>
}

export const IconInput: FC<IconInputProps> = props => {
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
        IconAfter,
        IconBefore,
        ...inputProps
    } = props

    if (labelPosition === 'top') {
        return (
            <IconInputTop
                label={label}
                size={size}
                quiet={quiet}
                variant={variant}
                required={required}
                isValid={isValid}
                disabled={disabled}
                helpText={helpText}
                IconAfter={IconAfter}
                IconBefore={IconBefore}
                {...inputProps}
            />
        )
    }

    return (
        <IconInputSide
            label={label}
            size={size}
            quiet={quiet}
            variant={variant}
            required={required}
            isValid={isValid}
            disabled={disabled}
            IconAfter={IconAfter}
            IconBefore={IconBefore}
            {...inputProps}
        />
    )
}
