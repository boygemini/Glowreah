import { Button as ShadBtn } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ButtonProps {
  variant?: String;
  name?: String;
  text: String;
}

function Button({ variant, text, name }: ButtonProps) {
  switch (variant) {
    case "menu":
      return (
        <ShadBtn
          className={cn("menu-btn text-black flex flex-col h-17 font-sans p-0")}
        >
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {text}
        </ShadBtn>
      );

    default:
      return (
        <ShadBtn
          className={cn(
            `${name} w-40 h-14 rounded-full	text-xl	text-black bg-white m-4 hover:bg-slate-300`
          )}
        >
          {text}
        </ShadBtn>
      );
  }
}

export default Button;
