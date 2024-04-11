import React from "react";
import { cn } from "@/lib/utils";

type Props = {};

export default function Newsletter({}: Props) {
  return (
    <div className="newsletter w-full py-10 my-4 flex flex-col gap-8 ">
      <p className={cn("text-center text-2xl font-semibold p-4")}>
        10% of your next purchase by subscribing to this newsletter
      </p>
      <form action="" className={cn("flex flex-col gap-4 items-center")}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className={cn(
            "news-email w-full border border-solid text-lg border-gray-700 h-16 p-4 translate-y-8 text-mediam rounded-none"
          )}
        />
        <button
          type="submit"
          className={cn(
            "sub-btn w-full bg-red-500 text-white h-16 text-2xl font-medium p-4 "
          )}
        >
          Subscribe
        </button>
      </form>
      <div className="pp p-4 text-sm -my-7 text-gray-600">
        By subscribing, you agree to our Privacy Policy and Promotion
        conditions.
      </div>
    </div>
  );
}
