"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHidden = pathname === "/" ? "hidden" : "";

  return (
    <header>
      <div className="flex flex-row items-center">
        <div className="navbutton flex flex-grow">
          <button
            className={`btn btn-sm btn-primary rounded-full ${isHidden}`}
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="logo flex flex-grow">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-4xl font-extrabold">minota</span>
            <div className="badge badge-primary">beta</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
