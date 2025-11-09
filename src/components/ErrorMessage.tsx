import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ErrorMessage = ({
  message = "Error loading content",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) => (
  <div
    className="flex items-center justify-center min-h-[300px] p-4"
    role="alert"
  >
    <Card className="w-full max-w-md border-red-200 bg-red-50/50">
      <CardContent className="py-4">
        <div className="text-center space-y-4">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-red-100 p-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-red-900">
              Oops! Something went wrong
            </h3>
            <p className="text-sm text-red-700 leading-relaxed">{message}</p>
          </div>

          {/* Retry Button */}
          {onRetry && (
            <Button
              onClick={onRetry}
              variant="outline"
              size="sm"
              className="mt-4 !border-red-300 text-red-700 hover:!bg-red-50 hover:border-red-400 !bg-transparent hover:!text-red-500"
              aria-label="Retry loading content"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ErrorMessage;
