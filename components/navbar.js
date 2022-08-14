import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <Image
              priority
              src="/images/logo.png"
              width={145}
              height={60}
              alt="Q360 Logo"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link href="/about">
              <a className="nav-link">{t("about")}</a>
            </Link>
            <Link href="/services">
              <a className="nav-link">{t("services")}</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">{t("contact")}</a>
            </Link>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
