import type { Meta, StoryObj } from '@storybook/react';
import {Sidebar} from './Sidebar'
const meta = {
    title:'Ui/Sidebar',
    component:Sidebar,
    tags:['autodocs'],
    parameters:{
        layout:'fullscreen'
    }

} satisfies Meta<typeof Sidebar>

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};
