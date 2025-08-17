import { z } from 'genkit';

const SalesHistorySchema = z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
});

export const SalesAssistantInputSchema = z.object({
  history: z.array(SalesHistorySchema),
  message: z.string().describe("The latest message from the user."),
});
export type SalesAssistantInput = z.infer<typeof SalesAssistantInputSchema>;

const ProposalSchema = z.object({
    summary: z.string().describe("A summary of the project requirements."),
    budget: z.object({
        min: z.number(),
        max: z.number(),
    }).describe("The estimated budget range for the project.").optional(),
    timeline: z.object({
        min: z.number(),
        unit: z.enum(['weeks', 'months']),
        max: z.number(),
    }).describe("The estimated timeline for the project.").optional(),
});

export const SalesAssistantOutputSchema = z.object({
    response: z.string().describe("The assistant's response to the user."),
    proposal: ProposalSchema.optional().describe("The final proposal. Only provided when the assistant has enough information."),
});
export type SalesAssistantOutput = z.infer<typeof SalesAssistantOutputSchema>;
