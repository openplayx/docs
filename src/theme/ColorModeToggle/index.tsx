import React, {useEffect} from 'react';
import OriginalColorModeToggle from '@theme-original/ColorModeToggle';
import type {Props} from '@theme/ColorModeToggle';

// Keep Docusaurus's accessible toggle and system/light/dark cycle, while sharing
// the marketing site's preference across full-page navigation and open tabs.
export default function ColorModeToggle(props: Props) {
  useEffect(() => {
    const sync = () => {
      try {
        const value = localStorage.getItem('opx-theme');
        props.onChange(value === 'light' || value === 'dark' ? value : null);
      } catch { /* The standard toggle still works without browser storage. */ }
    };
    sync();
    const onStorage = (event: StorageEvent) => {
      if (event.key === 'opx-theme' || event.key === null) sync();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [props.onChange]);
  return <OriginalColorModeToggle {...props} onChange={value => {
    try {
      if (value === null) localStorage.removeItem('opx-theme');
      else localStorage.setItem('opx-theme', value);
    } catch { /* Preserve the in-memory choice if storage is disabled. */ }
    props.onChange(value);
  }} />;
}
