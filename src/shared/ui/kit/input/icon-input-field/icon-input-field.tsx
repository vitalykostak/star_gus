import cn from 'classnames'
import { type FC, type InputHTMLAttributes, type SVGProps } from 'react'

import { InputField } from '../input-field/input-field'
import { type Size, type Variant } from '../types'

import { iconSizeMapping } from './constants'
import { IconAfterContainer } from './icon-after-container/icon-after-container'
import { IconBeforeContainer } from './icon-before-container/icon-before-container'
import styles from './icon-input-field.module.scss'

interface IconInputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size: Size
    quiet: boolean
    variant: Variant
    isValid: boolean
    disabled: boolean
    IconBefore?: FC<SVGProps<SVGSVGElement>>
    IconAfter?: FC<SVGProps<SVGSVGElement>>
}

export const IconInputField: FC<IconInputFieldProps> = props => {
    const {
        size,
        variant,
        quiet,
        isValid,
        className,
        IconAfter,
        IconBefore,
        disabled,
        ...inputProps
    } = props

    return (
        <div
            className={cn(
                styles.container,
                styles[size],
                styles[variant],
                disabled && styles.disabled,
                !isValid && styles.error,
                quiet && styles.quiet,
                IconBefore && styles.withIconBefore,
                IconAfter && styles.withIconAfter,
                className,
            )}
        >
            {IconBefore && (
                <IconBeforeContainer size={size}>
                    <IconBefore width={iconSizeMapping[size]} height={iconSizeMapping[size]} />
                </IconBeforeContainer>
            )}
            <InputField
                isValid={isValid}
                size={size}
                quiet={quiet}
                variant={variant}
                minimal
                disabled={disabled}
                {...inputProps}
            />
            {IconAfter && (
                <IconAfterContainer size={size}>
                    <IconAfter width={iconSizeMapping[size]} height={iconSizeMapping[size]} />
                </IconAfterContainer>
            )}
        </div>
    )
}
