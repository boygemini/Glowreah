import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: String;
  className?: String;
  text?: String;
  style?: String;
  children?: React.ReactNode;
  onclick?: () => void;
}

function Button({ variant, text, className, onclick, children }: ButtonProps) {
  switch (variant) {
    case "menu":
      return (
        <button
          onClick={onclick}
          className={cn(
            `${className} menu-btn text-black flex flex-col bg-transparent items-center h-17 font-sans p-0`
          )}
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
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {text}
        </button>
      );

    case "icon-button":
      return (
        <button
          onClick={onclick}
          className={cn(`${className} w-auto p-5 text-x	text-black`)}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          onClick={onclick}
          className={cn(`${className} w-auto p-5 text-x	text-black`)}
        >
          {text}
        </button>
      );
  }
}

export default Button;
