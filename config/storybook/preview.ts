import { type Preview } from '@storybook/react'

import '../../src/app/styles/index.scss'
import ThemeDecorator from './ThemeDecorator'

const preview: Preview = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            values: [
                { name: 'Dark', value: '#333' },
                { name: 'Light', value: '#F4F5F7' },
            ],
            default: 'Light',
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [ThemeDecorator()],
}

export default preview
