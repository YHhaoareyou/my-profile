import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

// import '@/styles/colors.css';
import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
          <div className='flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4'>
            <a
              href='/'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8'
                alt='Flowbite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                YHhaoareyou
              </span>
            </a>
            <div className='flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse'>
              Language
            </div>
            <div
              id='mega-menu'
              className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            >
              <ul className='flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse'>
                <li>
                  <a
                    href='/researches'
                    className='block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                    aria-current='page'
                  >
                    Researches
                  </a>
                </li>
                <li>
                  <a
                    href='/creations'
                    className='block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                    aria-current='page'
                  >
                    Creations
                  </a>
                </li>
                <li>
                  <a
                    href='/publications'
                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Publications
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
