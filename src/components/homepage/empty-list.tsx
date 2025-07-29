import { Search, Package } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: "search" | "package";
}

const EmptyState = ({ 
  title = "", 
  description = ".",
  icon = "package" 
}: EmptyStateProps) => {
  const IconComponent = icon === "search" ? Search : Package;

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center">
          <IconComponent className="w-10 h-10 text-muted-foreground" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-muted flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Nenhum item encontrado
      </h3>
      
      <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
        Não há itens perdidos correspondentes aos seus critérios de busca
      </p>
      
      <div className="mt-6 text-xs text-muted-foreground/70">
        Tente ajustar seus filtros ou termos de busca
      </div>
    </div>
  );
};

export default EmptyState;