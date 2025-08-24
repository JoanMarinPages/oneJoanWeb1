
'use client';

import { Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  title: string;
}

export function ShareButton({ title }: ShareButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Echa un vistazo a este artículo: "${title}"`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error al compartir:', err);
        // This can happen if the user cancels the share dialog, so we don't show an error.
      }
    } else {
        // Fallback for browsers that don't support the Web Share API
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast({
                title: "Enlace Copiado",
                description: "El enlace al artículo ha sido copiado a tu portapapeles.",
            });
        } catch (err) {
            console.error('Error al copiar el enlace:', err);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'No se pudo copiar el enlace al portapapeles.',
            });
        }
    }
  };

  return (
    <Button onClick={handleShare} variant="outline">
      <Share2 className="mr-2 h-4 w-4" />
      Compartir Artículo
    </Button>
  );
}
