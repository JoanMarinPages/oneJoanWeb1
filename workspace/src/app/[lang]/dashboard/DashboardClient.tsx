
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/components/auth-provider';
import { getUserProposals } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Proposal = {
  id: string;
  proposal: {
    summary: string;
    budget?: { min: number; max: number };
    timeline?: { min: number; max: number; unit: string };
  };
  status: string;
  createdAt: string;
};

interface DashboardClientProps {
    dictionary: any;
}

export function DashboardClient({ dictionary }: DashboardClientProps) {
  const { user, loading: authLoading } = useAuth();
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchProposals = async () => {
        try {
          setLoading(true);
          const userProposals = await getUserProposals(user.uid);
          setProposals(userProposals as Proposal[]);
        } catch (error) {
          console.error("Failed to fetch proposals:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProposals();
    } else if (!authLoading) {
      setLoading(false);
    }
  }, [user, authLoading]);
  
  const logIn = () => {
    // This is a workaround to call the logIn function from the AuthProvider context
    // which is not directly available in a server component that can't use hooks.
    // A better approach would be to have a global state or a different architecture
    // for authentication actions if needed outside of client components.
    if (typeof window !== 'undefined') {
      (window as any).logIn?.();
    }
  };
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
        (window as any).logIn = logIn;
    }
  }, [logIn]);


  if (authLoading || loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center text-center my-20">
          <h1 className="text-2xl font-bold mb-4">Acceso Denegado</h1>
          <p className="text-muted-foreground mb-4">Por favor, inicia sesión para ver tu dashboard.</p>
           <Button onClick={logIn}>{dictionary.Header.login}</Button>
      </main>
    );
  }

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tu Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Mis Propuestas</CardTitle>
          <CardDescription>Aquí puedes ver el estado de todas tus solicitudes.</CardDescription>
        </CardHeader>
        <CardContent>
          {proposals.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Proyecto</TableHead>
                  <TableHead>Presupuesto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proposals.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium max-w-sm truncate">{p.proposal.summary}</TableCell>
                    <TableCell>
                      {p.proposal.budget ? `€${p.proposal.budget.min} - €${p.proposal.budget.max}` : 'N/A'}
                    </TableCell>
                    <TableCell>
                      <Badge variant={p.status === 'pending' ? 'secondary' : 'default'}>{p.status}</Badge>
                    </TableCell>
                    <TableCell>{new Date(p.createdAt).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center py-8">No has enviado ninguna propuesta todavía.</p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
