import { useRef } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import useClickOutside from "../../hooks/general/useClickOutside";

interface ProfileOptionsProps {
  setAvatar: (picture: string) => void;
  setBanner: (picture: string) => void;
  onAvatarChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    profileField: "avatar" | "banner",
    updateCallback: (picture: string) => void
  ) => void;
  onBannerChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    profileField: "avatar" | "banner",
    updateCallback: (picture: string) => void
  ) => void;
}

export default function ProfileOptions({
  setAvatar,
  setBanner,
  onAvatarChange,
  onBannerChange,
}: ProfileOptionsProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useClickOutside(dropdownRef);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          className={`flex items-center justify-center rounded-lg aspect-square w-[36px] sm:w-[42px] border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 dark:hover:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-900 text-neutral-600 border-neutral-100 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-700 hover:border-neutral-200 ${
            isOpen ? "dark:border-neutral-500 border-neutral-200" : ""
          }`}
          onClick={handleClick}
        >
          <span className="sr-only">Profile options</span>
          <PiDotsThreeBold
            size={20}
            className={`transition-transform duration-200 dark:text-neutral-400 text-neutral-600 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        <div
          className={`absolute top-[50px] right-0 z-30  text-left divide-y rounded-lg shadow w-44 dark:bg-neutral-900 bg-neutral-50 dark:divide-neutral-700/50 divide-neutral-200  transition-all duration-200 ${
            isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
          }`}
        >
          <form name="profile" className="py-2 text-sm dark:text-neutral-300">
            <label htmlFor="avatar" className="cursor-pointer">
              <span className="block px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900 ">
                Edit avatar
              </span>
              <input
                name="avatar"
                id="avatar"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={(event) => onAvatarChange(event, "avatar", setAvatar)}
                onClick={handleClick}
              />
            </label>
            <label htmlFor="banner" className="cursor-pointer">
              <span className="block px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900">
                Edit banner
              </span>
              <input
                name="banner"
                id="banner"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={(event) => onBannerChange(event, "banner", setBanner)}
                onClick={handleClick}
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
