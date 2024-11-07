import Logo from './components/logo/logo.jsx';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default {
  docsRepositoryBase: 'https://github.com/oniryk-labs/dreamer.oniryk.tech/tree/main',
  logo: (
    <div className="flex flex-row gap-4 items-center">
      <Logo width={32} height={32} alt="dreamer logo" />
      <span className="font-bold text-lg">dreamer</span>
    </div>
  ),
  project: {
    link: 'https://github.com/oniryk-labs/dreamer',
  },
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const url =
      'https://dreamer.oniryk.dev' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <title>{`${title} - dreamer`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title || 'dreamer'} />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta
          property="og:description"
          content={frontMatter.description || 'Speed up AdonisJS V6 development flow'}
        />
      </>
    );
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://oniryk.dev" target="_blank">
          oniryk
        </a>
      </span>
    ),
  },
};
