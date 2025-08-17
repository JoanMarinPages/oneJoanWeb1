
'use server';

import { runSalesAssistant } from '@/ai/flows/sales-assistant-flow';
import type { SalesAssistantInput, SalesAssistantOutput } from '@/ai/schemas/sales-assistant-schemas';
import { db } from '@/lib/firebase-admin';

export async function salesAssistantAction(input: SalesAssistantInput) {
    return await runSalesAssistant(input);
}

type SaveProposalPayload = {
    userId: string;
    userName: string;
    userEmail: string;
    proposal: NonNullable<SalesAssistantOutput['proposal']>;
    history: SalesAssistantInput['history'];
};

export async function saveProposalAction(payload: SaveProposalPayload) {
    try {
        const { userId, ...data } = payload;
        const proposalRef = db.collection('proposals').doc();
        await proposalRef.set({
            ...data,
            userId,
            createdAt: new Date().toISOString(),
            status: 'pending',
        });
        return { success: true, id: proposalRef.id };
    } catch (error) {
        console.error("Error saving proposal to Firestore:", error);
        throw new Error("Could not save proposal.");
    }
}


export async function getUserProposals(userId: string) {
    try {
        const snapshot = await db.collection('proposals').where('userId', '==', userId).orderBy('createdAt', 'desc').get();
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching user proposals:", error);
        throw new Error("Could not fetch proposals.");
    }
}
