import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: String;
  name?: String;
  text: String;
  style?: String;
}

function Button({ variant, text, name }: ButtonProps) {
  switch (variant) {
    case "menu":
      return (
        <button
          className={cn(
            `${name} menu-btn text-black flex flex-col items-center h-17 font-sans p-0`
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
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {text}
        </button>
      );

    default:
      return (
        <button
          className={cn(
            `${name} min-w-40 min-h-14 text-x	text-black bg-white hover:bg-slate-300`
          )}
        >
          {text}
        </button>
      );
  }
}

export default Button;
