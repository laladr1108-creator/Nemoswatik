// Native links remain fully usable without JavaScript.
// Respect the visitor's motion preference when following internal navigation.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.scrollBehavior = 'auto';
}
