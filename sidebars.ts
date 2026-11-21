import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {guide: [
  'index',
  {type: 'category', label: 'Getting started', items: ['getting-started/first-video']},
  {type: 'category', label: 'Media sources', items: ['sources/smb']},
  {type: 'category', label: 'Library', items: ['library/home']},
  {type: 'category', label: 'AI', items: ['ai/models', 'ai/mcp']},
  {type: 'category', label: 'Remote access', items: ['remote-access/connector']},
  {type: 'category', label: 'Help', items: ['help/faq']},
]};
export default sidebars;
