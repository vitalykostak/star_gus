import { type FC, type InputHTMLAttributes } from 'react'

import { Container } from '../container/container'
import { HelpText } from '../help-text/help-text'
import { InputField } from '../input-field/input-field'
import { Label } from '../label/label'
import { type Size, type Variant } from '../types'

interface BaseInputTopProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size: Size
    label?: string
    quiet: boolean
    variant: Variant
    required: boolean
    isValid: boolean
    helpText?: string
    disabled: boolean
}

export const BaseInputTop: FC<BaseInputTopProps> = props => {
    const {
        className,
        label,
        helpText,
        size = 'md',
        quiet = false,
        variant = 'fill',
        required = false,
        isValid = true,
        disabled = false,
        ...inputProps
    } = props

    if (!label && !helpText) {
        return (
            <InputField
                isValid={isValid}
                disabled={disabled}
                className={className}
                size={size}
                quiet={quiet}
                variant={variant}
                {...inputProps}
            />
        )
    }

    if (!helpText) {
        return (
            <Container size={size} align="vertical" className={className}>
                <Label size={size} required={required} disabled={disabled}>
                    {label}
                </Label>
                <InputField
                    isValid={isValid}
                    disabled={disabled}
                    size={size}
                    quiet={quiet}
                    variant={variant}
                    {...inputProps}
                />
            </Container>
        )
    }

    return (
        <Container size={size} align="vertical" className={className}>
            <Label size={size} required={required} disabled={disabled}>
                {label}
            </Label>
            <InputField
                isValid={isValid}
                disabled={disabled}
                size={size}
                quiet={quiet}
                variant={variant}
                {...inputProps}
            />
            <HelpText size={size} isValid={isValid}>
                {helpText}
            </HelpText>
        </Container>
    )
}
