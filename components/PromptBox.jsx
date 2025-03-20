import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
const PromptBox = ({ isLoading, setIsLoading }) => {
  const [prompt, setPrompt] = useState("");

  const { user, chats, setChats, selectedChat, setSelectedChat } =
    useAppContext();

  const sendPrompt = async (e) => {
    const promptCopy = prompt;

    try {
      e.preventDefault();
      if (!user) return toast.error("Login to send message");
      if (isLoading) return toast.error("Wait for previous response");

      setIsLoading(true)
      setPrompt('')
      const userPrompt= {
        role: 'user',
        content: prompt,
        timestamp: Date.now()
      }

      // Saving user prompt in chats array
    } catch (error) {}
  };

  return (
    <form
      className={`w-full ${
        false ? "max-w-3xl" : "max-w-2xl"
      } bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
    >
      <textarea
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        rows={2}
        placeholder="message DeepSeek"
        required
        className="outline-none w-full resize-none overflow-hidden break-words bg-transparent"
      />
      <div className=" flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-2 text-xs border border-gray300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image className="h-5" alt="" src={assets.deepthink_icon} />
            Deepthink (R1)
          </p>
          <p className="flex items-center gap-2 text-xs border border-gray300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image className="h-5" alt="" src={assets.search_icon} />
            Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image className="w-4 cursor-pointer" alt="" src={assets.pin_icon} />
          <button
            className={`${
              prompt ? "bg-primary" : "bg-[#71717a]"
            } rounded-full p-2 cursor-pointer`}
          >
            <Image
              className="w-3.5 aspect-square"
              alt=""
              src={prompt ? assets.arrow_icon : assets.arrow_icon_dull}
            />
          </button>
        </div>
      </div>
    </form>
  );
};
export default PromptBox;
