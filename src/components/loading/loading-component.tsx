import { Loader2 } from "lucide-react";

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreenComponent = ({ message = "Carregando..." }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4 p-8">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
        </div>
        
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold text-foreground">
            {message}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            Por favor, aguarde um momento
          </p>
        </div>
        
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreenComponent;