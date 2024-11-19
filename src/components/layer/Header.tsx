import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { PiWalletFill, PiUserFill } from "react-icons/pi";

export default function Header() {
  return (
    <header className="p-2 flex justify-between items-center max-w-screen-2xl mx-auto w-full">
      <div className="flex items-center gap-5">
        <Logo />
        <div
          aria-hidden
          className="w-0.5 bg-neutral-400 dark:bg-neutral-500 h-6"
        ></div>

        <nav>
          <ul className="flex items-center text-base font-semibold gap-2.5">
            <li className="dark:text-neutral-400 dark:hover:text-neutral-300 text-neutral-500 hover:text-neutral-600">
              <Link to="/explore">Explore</Link>
            </li>
            <li className="dark:text-neutral-400 dark:hover:text-neutral-300 text-neutral-500 hover:text-neutral-600">
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
      </div>

      <aside className="flex items-center gap-2.5">
        <SearchBar />
        <Button type="primary" ariaLabel="Connect wallet">
          <PiWalletFill size={20} />
          Connect
        </Button>
        <Button type="outlined" ariaLabel="Account">
          <PiUserFill size={20} />
        </Button>
      </aside>
    </header>
  );
}