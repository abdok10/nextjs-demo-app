import Image from "next/image";
import Link from "next/link";
import PluraLogo from "@/public/plura-logo.svg";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="navbar bg-base-100 container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Image src={PluraLogo} alt="Plura Logo" width={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
        <Link
          href={"/"}
          className="btn btn-ghost text-xl hidden lg:flex item-center"
        >
          <Image src={PluraLogo} alt="Plura Logo" width={35} />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex z-10 w-100px">
        <SignedIn>
          <ul className="menu menu-horizontal px-1 w-100px">
            <li className="w-100px">
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </SignedIn>
        <SignedOut>
          <ul className="menu menu-horizontal px-1 w-100px">
            <li className="w-100px">
              <Link href="/sign-in">Posts</Link>
            </li>
            <li>
              <Link href={"/sign-in"}>Blog</Link>
            </li>
          </ul>
        </SignedOut>
      </div>

      <span className="navbar-end text-lg">
        <SignedOut>
          <div className="flex gap-4">
            <span className="hover:underline hover:text-xl transition-all">
              <Link href={"sign-in"}>Login</Link>
            </span>
            <span className="hover:underline hover:text-xl transition-all">
              <Link href={"sign-up"}>Register</Link>
            </span>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            <Link href={"dashboard"}>Dashboard</Link>
            <UserButton />
          </div>
        </SignedIn>
      </span>
    </div>
  );
}
export default Navbar;
