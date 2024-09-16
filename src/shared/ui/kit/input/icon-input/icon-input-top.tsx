import { type FC, type InputHTMLAttributes, type SVGProps } from 'react'

import { Container } from '../container/container'
import { HelpText } from '../help-text/help-text'
import { IconInputField } from '../icon-input-field/icon-input-field'
import { Label } from '../label/label'
import { type Size, type Variant } from '../types'

interface IconInputTopProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size: Size
    label?: string
    quiet: boolean
    variant: Variant
    required: boolean
    isValid: boolean
    helpText?: string
    disabled: boolean
    IconBefore?: FC<SVGProps<SVGSVGElement>>
    IconAfter?: FC<SVGProps<SVGSVGElement>>
}

export const IconInputTop: FC<IconInputTopProps> = props => {
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
        IconAfter,
        IconBefore,
        ...inputProps
    } = props

    if (!label && !helpText) {
        return (
            <IconInputField
                isValid={isValid}
                disabled={disabled}
                className={className}
                size={size}
                quiet={quiet}
                variant={variant}
                IconAfter={IconAfter}
                IconBefore={IconBefore}
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
                <IconInputField
                    isValid={isValid}
                    disabled={disabled}
                    size={size}
                    quiet={quiet}
                    variant={variant}
                    IconAfter={IconAfter}
                    IconBefore={IconBefore}
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
            <IconInputField
                isValid={isValid}
                disabled={disabled}
                size={size}
                quiet={quiet}
                variant={variant}
                IconAfter={IconAfter}
                IconBefore={IconBefore}
                {...inputProps}
            />
            <HelpText size={size} isValid={isValid}>
                {helpText}
            </HelpText>
        </Container>
    )
}
