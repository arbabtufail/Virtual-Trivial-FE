import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const NavbarLogo = () => {
    return (
      <div className={styles["navbar-logo"]}>
        <Image
          src="/login/Experios.png"
          alt="Logo Virtual Trivial"
          width={100}
          height={35}
        ></Image>
      </div>
    );
  };

  // const NavbarButtons = () => {};

  return <div className={styles.navbar}>{NavbarLogo()}</div>;
};
export default Navbar;
