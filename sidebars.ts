import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {guide: [
  'index',
  {type: 'category', label: 'Getting started', items: ['getting-started/first-video', 'getting-started/tv']},
  {type: 'category', label: 'Playback', items: ['playback/engines-and-pip', 'playback/subtitles']},
  {type: 'category', label: 'Media sources', items: ['sources/smb', 'sources/media-servers', 'sources/cloud-drives']},
  {type: 'category', label: 'Library', items: ['library/home']},
  {type: 'category', label: 'AI', items: ['ai/models', 'ai/mcp']},
  {type: 'category', label: 'Remote access', items: ['remote-access/connector']},
  {type: 'category', label: 'Help', items: ['help/faq']},
]};
export default sidebars;
