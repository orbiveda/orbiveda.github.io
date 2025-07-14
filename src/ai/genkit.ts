/*
 * © 2025 Orbiveda™. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
