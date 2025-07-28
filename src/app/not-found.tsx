"use client"

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full space-y-8">
        <div className="space-y-4">
          <div className="relative">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-3xl -z-10"></div>
          </div>
          
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Página não encontrada
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            Ops! A página que você está procurando não existe ou foi movida. 
            Que tal voltar ao início?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            className="group hover:shadow-elegant transition-all duration-300"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Voltar ao Início
            </Link>
          </Button>
        </div>

        <div className="text-xs text-muted-foreground/70">
          Erro 404 • Página: {pathname}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
