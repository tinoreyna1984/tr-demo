import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export default function LocaleSwitcher() {
 const { locales, locale, pathname, query, asPath } = useRouter();
 const otherLocales = locales.filter((l) => l !== locale); // Find all the locales apart from the current locale.
 const t = useTranslations("Navbar");

 return (
   <>
     {otherLocales.map((locale) => {
       return (
         <Link
           key={locale}
           href={{ pathname, query }}
           as={asPath}
           locale={locale}
         >
           <a className="nav-link">{t("switchLanguage", { locale })}</a>
         </Link>
       );
     })}
   </>
 );
}