// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chessifier.github.io',
  base: '/',
  integrations: [
    starlight({
      title: 'Chessifier',
      description: 'Chessifier Documentation – Learn how to install and use Chessifier.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Chessifier/Chessifier',
        },
      ],
      favicon: '/favicon.ico',
      head: [
        {
          tag: 'meta',
          attrs: { name: 'author', content: 'Chessifier Team' },
        },
        {
          tag: 'link',
          attrs: { rel: 'canonical', href: 'https://chessifier.github.io/Chessifier/' },
        },
      ],
      sidebar: [
        {
          label: 'Installation Guide',
          slug: 'installation-guide',
        },
      ],
      components: {
        Header: './src/components/Header.astro',
      },
    }),
    sitemap(),
  ],
});
