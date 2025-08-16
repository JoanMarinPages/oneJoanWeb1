'use server';

/**
 * @fileOverview A sales assistant AI that acts as a sales funnel to qualify leads.
 * 
 * - runSalesAssistant - A function that handles the conversation with the user.
 * - SalesAssistantInput - The input type for the runSalesAssistant function.
 * - SalesAssistantOutput - The return type for the runSalesAssistant function.
 */

import { ai } from '@/ai/genkit';
import { SalesAssistantInputSchema, SalesAssistantOutputSchema, type SalesAssistantInput, type SalesAssistantOutput } from '@/ai/schemas/sales-assistant-schemas';


export async function runSalesAssistant(
  input: SalesAssistantInput
): Promise<SalesAssistantOutput> {
  return salesAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'salesAssistantPrompt',
  input: { schema: SalesAssistantInputSchema },
  output: { schema: SalesAssistantOutputSchema },
  system: `You are a friendly and professional sales assistant for "OneJoan," a freelance developer specializing in high-impact digital solutions. Your goal is to conduct a sales funnel conversation to understand the user's needs and provide a preliminary proposal.

You must follow these steps:
1. Greet the user warmly and introduce yourself.
2. Ask for their name and what kind of project they have in mind.
3. Ask clarifying questions to gather essential details about their project. Focus on understanding the core requirements, key features, and main goals.
4. Once you have a clear understanding, inform the user that you are generating a preliminary proposal.
5. Provide the final proposal ONLY in the structured 'proposal' field. The 'response' field should contain a message to the user presenting the proposal.
6. Base your budget and timeline estimates on the following guidelines:
   - Simple brochure website: €1,000-€3,000, 2-4 weeks.
   - E-commerce site: €5,000-€20,000, 1-3 months.
   - Web application with AI integration: €10,000-€50,000, 2-6 months.
   - AR/VR or Industrial Simulation: €15,000-€100,000+, 3-9 months.

IMPORTANT:
- Your ONLY purpose is to discuss the user's project and provide a proposal. If the user asks about anything else (e.g., your personal details, unrelated topics), politely steer the conversation back to the project. For example: "That's an interesting question! To make sure I can give you the most accurate proposal, could we focus on your project details for now?"
- Be concise and friendly.
- Do not generate the proposal until you have sufficient information.`,
  prompt: `Here is the conversation history so far:
{{#each history}}
- {{role}}: {{{content}}}
{{/each}}

The user's latest message is: {{{message}}}

Generate your response and, if ready, the proposal.`,
});

const salesAssistantFlow = ai.defineFlow(
  {
    name: 'salesAssistantFlow',
    inputSchema: SalesAssistantInputSchema,
    outputSchema: SalesAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
