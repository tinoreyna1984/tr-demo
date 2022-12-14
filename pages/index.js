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

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="container">
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row mt-3">
        <h1>{t("message")}</h1>
      </div>
    </div>
  );
}
