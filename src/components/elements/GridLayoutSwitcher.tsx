import { PiDotsNineBold, PiSquaresFourFill } from "react-icons/pi";

export default function GridLayoutSwitcher() {
  return (
    <div className="mt-6  p-1 sm:p-1.5 h-[36px] sm:h-[42px] dark:bg-neutral-900 bg-neutral-200/50 rounded-lg flex gap-2">
      <button
        className="p-1 sm:p-1.5 rounded-lg dark:bg-neutral-950 bg-neutral-300 disabled:cursor-not-allowed"
        disabled
      >
        <span className="sr-only">Grid 2 columns</span>
        <PiSquaresFourFill
          size={18}
          className="dark:text-neutral-200 text-neutral-800 duration-0"
        />
      </button>
      <button
        className="p-1 sm:p-1.5 rounded-lg  disabled:cursor-not-allowed "
        disabled
      >
        <span className="sr-only">Grid 3 columns</span>
        <PiDotsNineBold
          size={18}
          className="dark:text-neutral-200 text-neutral-800 duration-0"
        />
      </button>
    </div>
  );
}
