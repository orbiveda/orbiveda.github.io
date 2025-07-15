/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

"use client";

// This is a custom image loader for Next.js that works with static exports.
// It simply returns the src as is, which is what we need for GitHub Pages.
export default function customImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
