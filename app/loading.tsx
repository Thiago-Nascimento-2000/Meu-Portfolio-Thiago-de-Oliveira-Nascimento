const Loading = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex h-dvh w-screen items-center justify-center bg-black/75 backdrop-blur-sm"
      role="status"
      aria-label="Carregando página"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute h-full w-full rounded-full border-4 border-[#A5D872]/20" />
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-transparent border-t-[#A5D872] border-r-[#A5D872]" />
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
};

export default Loading;
