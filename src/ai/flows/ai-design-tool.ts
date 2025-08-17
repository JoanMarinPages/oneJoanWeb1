
'use server';

/**
 * @fileOverview An AI-powered design tool that generates design prompts based on user descriptions.
 *
 * - generateDesignPrompt - A function that generates design prompts for AI tools like DALL-E or Stable Diffusion.
 * - DesignPromptInput - The input type for the generateDesignPrompt function.
 * - DesignPromptOutput - The return type for the generateDesignPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignPromptInputSchema = z.object({
  designDescription: z
    .string()
    .describe("A description of the desired logo or graphic design."),
});
export type DesignPromptInput = z.infer<typeof DesignPromptInputSchema>;

const DesignPromptOutputSchema = z.object({
  designPrompt: z
    .string()
    .describe("A design prompt suitable for AI tools like DALL-E or Stable Diffusion."),
});
export type DesignPromptOutput = z.infer<typeof DesignPromptOutputSchema>;

export async function generateDesignPrompt(
  input: DesignPromptInput
): Promise<DesignPromptOutput> {
  return generateDesignPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designPromptGenerator',
  input: {schema: DesignPromptInputSchema},
  output: {schema: DesignPromptOutputSchema},
  prompt: `You are an AI design assistant. Your task is to generate a detailed and creative design prompt based on the user's description.

User Description: {{{designDescription}}}

Generated Design Prompt:`, // No need to HTML-escape these, they are Typescript code, not HTML
});

const generateDesignPromptFlow = ai.defineFlow(
  {
    name: 'generateDesignPromptFlow',
    inputSchema: DesignPromptInputSchema,
    outputSchema: DesignPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
