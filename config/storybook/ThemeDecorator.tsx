import { type StoryFn } from '@storybook/react'

const ThemeDecorator = () => {
    const Decorator = (Story: StoryFn) => (
        <div className={`app_light_ui_theme`} style={{ width: 245 }}>
            <Story />
        </div>
    )

    return Decorator
}

export default ThemeDecorator
