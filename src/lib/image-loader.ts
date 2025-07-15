/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

// This is a custom image loader for Next.js that works with static exports.
// It simply returns the src as is, which is what we need for GitHub Pages.
export default function customImageLoader({ src }: { src: string }) {
  return src;
}
