import { type FC, type InputHTMLAttributes } from 'react'

import { Container } from '../container/container'
import { InputField } from '../input-field/input-field'
import { Label } from '../label/label'
import { type Size, type Variant } from '../types'

interface BaseInputSideProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size: Size
    label?: string
    quiet: boolean
    variant: Variant
    required: boolean
    isValid: boolean
    disabled: boolean
}

export const BaseInputSide: FC<BaseInputSideProps> = props => {
    const {
        className,
        label,
        size = 'md',
        quiet = false,
        variant = 'fill',
        required = false,
        isValid = true,
        disabled = false,
        ...inputProps
    } = props

    if (!label) {
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

    return (
        <Container size={size} align="horizontal" className={className}>
            <Label size={size} required={required} disabled={disabled} truncate>
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
