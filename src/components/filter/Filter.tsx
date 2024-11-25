import { useEffect, useRef, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Filter({ options }: { options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterSelected, setFilterSelected] = useState(options[0]);
  const filterRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (index: number) => {
    setFilterSelected(options[index]);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={filterRef}>
        <button
          className={`flex gap-2  items-center text-sm font-medium p-3 rounded-lg dark:text-neutral-300 dark:hover:bg-neutral-800 ${
            isOpen
              ? "dark:bg-neutral-800 bg-neutral-200"
              : "dark:bg-neutral-900 bg-neutral-200/50 "
          }`}
          onClick={handleOpenClick}
        >
          <span className="sr-only">Sort items</span>
          <span>{filterSelected}</span>
          <PiCaretDownBold
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <span className="sr-only">Profile options</span>

        <div
          className={` absolute top-[50px] left-0 z-10  text-left divide-y rounded-lg shadow w-44 dark:bg-neutral-900 dark:divide-neutral-700/50 bg-neutral-50 divide-neutral-200/50  transition-all duration-200 ${
            isOpen ? "opacity-100  " : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="py-2 text-sm dark:text-neutral-300">
            {options.map((option, index) => (
              <li key={index}>
                <Link
                  to={`${pathname}?filter=${option
                    .toLocaleLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 dark:hover:bg-neutral-800 hover:bg-neutral-200/50 "
                  onClick={() => handleSelection(index)}
                >
                  {option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
