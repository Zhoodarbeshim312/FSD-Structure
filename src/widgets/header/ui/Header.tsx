import { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>LOGO</h1>
          <nav className={scss.nav}>
            <Link href={"/"}>Home</Link>
            <Link href={"/admin"}>Admin</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
