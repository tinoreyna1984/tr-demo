import Head from "next/head";
import { useTranslations } from "next-intl";

export async function getStaticProps({locale}) {
  return {
    props: {
      messages: {
        ...require(`../public/locales/${locale}/common.json`),
        ...require(`../public/locales/${locale}/navbar.json`)
      }
    },
  };
}

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <div className="container">
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Please contact us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row mt-3">
        <h1>{t("title")}</h1>
      </div>
    </div>
  );
}
