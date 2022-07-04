import Link from "next/link";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Cars List</h1>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/">Cars listing</Link>
      </div>
    </nav>
  );
};

export default NavBar;
