export default function ProfileStats() {
  return (
    <div className="dark:bg-neutral-950/75 z-10 backdrop-blur-lg inline-flex items-center gap-10 p-6 rounded-lg absolute bottom-2 right-2">
      <div className="flex flex-col gap-1 items-center">
        <span className="text-base font-semibold dark:text-neutral-50">52</span>
        <span className="text-sm font-semibold dark:text-neutral-400">
          Items
        </span>
      </div>
      <div aria-disabled className="dark:bg-neutral-500/25 w-0.5 h-10"></div>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-base font-semibold dark:text-neutral-50">32</span>
        <span className="text-sm font-semibold dark:text-neutral-400">
          Wins
        </span>
      </div>
      <div aria-disabled className="dark:bg-neutral-500/25 w-0.5 h-10"></div>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-base font-semibold dark:text-neutral-50">
          1.2 K
        </span>
        <span className="text-sm font-semibold dark:text-neutral-400">
          Credits
        </span>
      </div>
    </div>
  );
}
