import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'getting-started',
    'features',
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'ai-models',
        'chat-development',
        'project-templates',
        'git-integration',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'environment-variables',
        'vercel-integration',
        // 'supabase-integration', // Coming in future release
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'models',
        'updates',
        'faq',
        'contributing',
        'support',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-page'],
    },
  ],
   */
};

export default sidebars;
