import Image from "next/image";
import Link from "next/link";
import PluraLogo from "@/public/plura-logo.svg";

function Navbar() {
  return (
    <div className="navbar bg-base-100 container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Image src={PluraLogo} alt="Plura Logo" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <details>
                <summary>
                  <Link href={"/products"} className="">Products</Link>
                </summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/products"} className="text-red-200">All products</Link>
                  </li>
                  <li>
                    <Link href={"/addProduct"}>Add New Product</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/features"}>Features</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          <Image src={PluraLogo} alt="Plura Logo" width={35} />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex z-10 w-100px">
        <ul className="menu menu-horizontal px-1 w-100px">
          <li className="w-100px">
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <details>
              <summary>
                <Link href={"/products"}>Products</Link>
              </summary>
              <ul className="p-2">
                <li className="min-w-[200px]">
                  <Link href={"/products"} className="">All products</Link>
                </li>
                <li>
                  <Link href={"/products/addProduct"}>Add New Product</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
export default Navbar;
