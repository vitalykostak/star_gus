import { type FC, type InputHTMLAttributes, type SVGProps } from 'react'

import { Container } from '../container/container'
import { IconInputField } from '../icon-input-field/icon-input-field'
import { Label } from '../label/label'
import { type Size, type Variant } from '../types'

interface IconInputSideProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size: Size
    label?: string
    quiet: boolean
    variant: Variant
    required: boolean
    isValid: boolean
    disabled: boolean
    IconBefore?: FC<SVGProps<SVGSVGElement>>
    IconAfter?: FC<SVGProps<SVGSVGElement>>
}

export const IconInputSide: FC<IconInputSideProps> = props => {
    const {
        className,
        label,
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

    if (!label) {
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

    return (
        <Container size={size} align="horizontal" className={className}>
            <Label size={size} required={required} disabled={disabled} truncate>
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
