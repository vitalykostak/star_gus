import EyeIcon from '../../icons/eye.svg'

import { Input } from './input'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared kit/input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        placeholder: 'placholder',
    },
}

export const WithBothIcons: Story = {
    args: {
        placeholder: 'placholder',
        IconBefore: EyeIcon,
        IconAfter: EyeIcon,
    },
}

export const WithBeforeIcon: Story = {
    args: {
        placeholder: 'placholder',
        IconBefore: EyeIcon,
    },
}

export const WithAfterIcon: Story = {
    args: {
        placeholder: 'placholder',
        IconAfter: EyeIcon,
    },
}
