const LoadingSpinner = () => (
  <div
    className="flex items-center justify-center min-h-[200px]"
    role="status"
    aria-label="Loading content"
  >
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    <span className="ml-2 text-muted-foreground">Loading...</span>
  </div>
);

export default LoadingSpinner;
