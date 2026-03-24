import { FaCircleNotch } from "react-icons/fa";

const Loading = async () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h2 className="text-white text-5xl font-bold">
        <FaCircleNotch size={45} className="animate-spin text-[#A5D872]" />
      </h2>
    </div>
  );
};

export default Loading;
