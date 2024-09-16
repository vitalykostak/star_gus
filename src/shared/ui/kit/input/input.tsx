import { type FC } from 'react'

import { BaseInput, type BaseInputProps } from './base-input/base-input'
import { IconInput, type IconInputProps } from './icon-input/icon-input'

function isIconInput(props: IconInputProps): boolean {
    return Boolean(props?.IconBefore || props?.IconAfter)
}

export const Input: FC<BaseInputProps | IconInputProps> = props => {
    if (isIconInput(props)) {
        return <IconInput {...props} />
    }

    return <BaseInput {...props} />
}
