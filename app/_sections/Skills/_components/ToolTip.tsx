type TooltipProps = { text: string };
const Tooltip = ({ text }: TooltipProps) => {
  return (
    <div className="relative inline-block">
      <div className="bg-gray-200 px-3 py-1.5 rounded-[4px] text-sm font-medium whitespace-nowrap">
        {text}
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 
        border-l-[6px] border-l-transparent
        border-r-[6px] border-r-transparent
        border-t-[6px] border-t-gray-200"
      />
    </div>
  );
};

export default Tooltip;
