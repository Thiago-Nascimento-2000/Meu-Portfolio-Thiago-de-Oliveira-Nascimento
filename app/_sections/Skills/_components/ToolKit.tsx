const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block">
      <div className="bg-gray-200 px-4 py-2 rounded-[4px] text-sm font-medium">
        {text}
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 
        border-l-[8px] border-l-transparent
        border-r-[8px] border-r-transparent
        border-t-[8px] border-t-gray-200"
      />
    </div>
  );
};

export default Tooltip;
