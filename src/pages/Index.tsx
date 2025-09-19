// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="text-center space-y-6 max-w-2xl px-6">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Ready to Build
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Your beautiful, empty project is ready. Start creating something amazing.
          </p>
        </div>
        
        <div className="pt-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-soft shadow-soft">
            <div className="w-8 h-8 rounded-full bg-gradient-primary animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
