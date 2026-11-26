// Standalone builds have no analytics dependency. The assembled website supplies
// the existing first-party PostHog bundle, which handles this route event.
const zhSiteMap: Record<string, string> = {
  'https://openplayx.com/': 'https://openplayx.com/zh/',
  'https://openplayx.com/download/': 'https://openplayx.com/zh/download/',
  'https://openplayx.com/privacy/': 'https://openplayx.com/zh/privacy/',
};

function localizeSiteLinks() {
  if (!document.documentElement.lang.startsWith('zh')) return;
  document.querySelectorAll<HTMLAnchorElement>('a.opx-same-site-link').forEach((link) => {
    const localized = zhSiteMap[link.href];
    if (localized) link.href = localized;
  });
}

export function onRouteDidUpdate({location, previousLocation}: {
  location: {pathname: string}; previousLocation?: {pathname: string};
}) {
  localizeSiteLinks();
  if (location.pathname !== previousLocation?.pathname) {
    window.dispatchEvent(new CustomEvent('opx:docs-navigation'));
  }
}
