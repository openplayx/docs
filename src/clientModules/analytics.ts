// Standalone builds have no analytics dependency. The assembled website supplies
// the existing first-party PostHog bundle, which handles this route event.
export function onRouteDidUpdate({location, previousLocation}: {
  location: {pathname: string}; previousLocation?: {pathname: string};
}) {
  if (location.pathname !== previousLocation?.pathname) {
    window.dispatchEvent(new CustomEvent('opx:docs-navigation'));
  }
}
