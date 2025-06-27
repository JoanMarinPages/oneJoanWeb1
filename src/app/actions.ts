'use server';

import { generateDesignPrompt, type DesignPromptInput } from '@/ai/flows/ai-design-tool';

export async function createDesignPromptAction(input: DesignPromptInput) {
    return await generateDesignPrompt(input);
}
