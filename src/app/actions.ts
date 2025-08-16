'use server';

import { generateDesignPrompt, type DesignPromptInput } from '@/ai/flows/ai-design-tool';
import { runSalesAssistant } from '@/ai/flows/sales-assistant-flow';
import type { SalesAssistantInput } from '@/ai/schemas/sales-assistant-schemas';

export async function createDesignPromptAction(input: DesignPromptInput) {
    return await generateDesignPrompt(input);
}

export async function salesAssistantAction(input: SalesAssistantInput) {
    return await runSalesAssistant(input);
}
