// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://chessifier.github.io',
    base: '/',
    integrations: [
        starlight({
            title: 'Chessifier',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Chessifier/Chessifier' }],
            sidebar: [
                {
                    label: 'Installation Guide',
                    slug: 'installation-guide'
                },
            ],
            components: {
                Header: './src/components/Header.astro',
            },
        }),
    ],
});