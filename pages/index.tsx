/* eslint-disable prettier/prettier */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shrihari Mohan</title>
        <meta property="og:title" content="Shrihari Mohan" />
        <meta name="description" content="Personal portfolio of Shrihari Mohan" />
        <meta name="og:image" content="https://shrihari.vercel.app/shrihari-og.jpeg"></meta>
        <meta name="twitter:title" content="Shrihari Mohan" />
        <meta property="og:description" content="Personal portfolio of Shrihari Mohan" />
        <meta name="twitter:description" content="Personal portfolio of Shrihari Mohan" />
        <meta property="og:image" content="https://shrihari.vercel.app/shrihari-og.jpeg" />
        <meta name="twitter:image" content="https://shrihari.vercel.app/shrihari-og.jpeg" />

        <meta property="og:url" content="https://shrihari.vercel.app" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="mx-auto w-11/12 max-w-screen-xl lg:flex lg:justify-between">
        <div className="flex flex-col justify-between pt-12 lg:sticky lg:top-0 lg:h-screen lg:w-1/3 lg:pt-20 lg:pb-32">
          <div>
            <h1 className="text-5xl font-bold lg:text-6xl">Shrihari Mohan</h1>
            <h2 className="mt-2 text-xl font-semibold lg:text-2xl">Full-Stack Developer</h2>
            <p className="mt-4 text-base  lg:w-10/12 lg:text-lg">
              Software engineer at{' '}
              <a className="font-medium" href="https://www.linkedin.com/company/ipos-systems/" target="_blank" rel="noreferrer">
                {' '}
                iPOS Systems
              </a>
              , I ship apps on the weekend!
            </p>

            {/* <button className="mt-4 rounded-xl border-2 border-stone-600 p-3 font-semibold text-stone-900">
              View Blogs
            </button> */}
          </div>
          <div className="hidden leading-relaxed lg:block">
            <Link href="mailto:shrihari.uma.1999@gmail.com">
              <a rel="noreferrer" className="border-white/90 py-1 font-medium hover:border-b">shrihari.uma.1999@gmail.com</a>
            </Link>
            <div className="mt-2 flex items-center gap-2">
              <a rel="noreferrer" href="https://twitter.com/papashrihari" target="_blank" >
                <img src='/icons/twitter.svg' className="h-5 w-5 hover:cursor-pointer" />
              </a>
              <a rel="noreferrer" href="https://github.com/ShrihariMohan" target="_blank" >
                <img src='/icons/github.svg' className="h-6 w-6 hover:cursor-pointer" />
              </a>
              <a rel="noreferrer" href="https://www.linkedin.com/in/shriharimohan/" target="_blank" >
                <img src='/icons/linkedin.svg' className="h-6 w-6 hover:cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div className="py-14 lg:w-1/2 lg:py-20">
          <h2 className="text-sm font-semibold uppercase  lg:mb-5">Products</h2>
          <Link href="https://docsai.app/" passHref>
            <a rel="noreferrer" target="_blank" className="mt-4 block rounded-xl border border-stone-500 bg-stone-100 p-4 transition-all duration-150 hover:shadow-md lg:p-8">
              <h1 className="text-xl font-semibold lg:text-3xl">DocsAI</h1>
              <small> Apr 2023, docsai.app</small>
              <p className="mt-2 text-base">
                Train your documents, chat with your documents, and create chatbots that solves queries for you and your
                users.
              </p>
            </a>
          </Link>

          <Link href="https://localhost-og-checker.vercel.app/" passHref>
            <a rel="noreferrer" target="_blank" className="mt-4 block rounded-xl border border-stone-500 bg-stone-100 p-4 transition-all duration-150 hover:shadow-md lg:p-8">
              <h1 className="text-xl font-semibold lg:text-3xl">Localhost opengraph Tester</h1>
              <small> Feb 2024, localhost-og-checker.vercel.app</small>
              <p className="mt-2 text-base">
                Effortless Open Graph tags testing by hosting your meta tags. See how your content will look on
                Facebook, Twitter, and more.
              </p>
            </a>
          </Link>

          <Link href="https://dynamicog.com/" >
            <a rel="noreferrer" target="_blank" className="mt-4 block rounded-xl border border-stone-500 bg-stone-100 p-4 transition-all duration-150 hover:shadow-md lg:p-8">
              <h1 className="text-xl font-semibold lg:text-3xl">Dynamic OG</h1>
              <small> May 2024, dynamicog.com</small>
              <p className="mt-2 text-base">
                Transform Your Links into Stunning Visuals. Stand Out with Personalized OG Images.
              </p>
            </a>
          </Link>

          <Link href="https://sharejson.com/" >
            <a rel="noreferrer" target="_blank" className="mt-4 block rounded-xl border border-stone-500 bg-stone-100 p-4 transition-all duration-150 hover:shadow-md lg:p-8">
              <h1 className="text-xl font-semibold lg:text-3xl">Sharejson</h1>
              <small> Jan 2024, sharejson.com</small>
              <p className="mt-2 text-base">
                Ditch coding delays! Share JSON & Mock APIs instantly, for free. No servers, no fees. Prototype apps,
                test integrations, build demos.
              </p>
            </a>
          </Link>


          <h2 className="mt-14 text-sm font-semibold uppercase  lg:mb-5 lg:mt-20">Contributions</h2>

          <Link href="https://github.com/KMKoushik/squeeth-portal" passHref>
            <a rel="noreferrer" target="_blank" className="mt-4 block rounded-xl border border-stone-500 bg-stone-100 p-4 transition-all duration-150 hover:shadow-md lg:p-8">
              <h1 className="text-xl font-semibold lg:text-3xl">Squeeth Portal</h1>
              <small>Aug 2022 </small>
              <p className="mt-2">An alternate app to interact with squeeth contracts and a single place for all your squeeths !</p>
            </a>
          </Link>

          <Link href="https://github.com/code-cracked/plants-vs-zombies-api" passHref>
            <a rel="noreferrer" target="_blank" className="mt-4 block rounded-xl border border-stone-500 bg-stone-100 p-4 transition-all duration-150 hover:shadow-md lg:p-8">
              <h1 className="text-xl font-semibold lg:text-3xl">Plant vs Zombies API</h1>
              <small>Feb 2022 </small>
              <p className="mt-2">An API built with with NextTS to help website builders build their websites about Plants-vs-Zombies-2</p>
            </a>
          </Link>

          <h2 className="mt-14 text-sm font-semibold uppercase  lg:mb-5 lg:mt-20">Work</h2>
          <Link href="https://www.linkedin.com/company/ipos-systems/about/" passHref>
            <a rel="noreferrer" target="_blank" className="mt-4 block rounded-xl border border-stone-500 bg-stone-100 p-4 transition-all duration-150 hover:shadow-md lg:p-8">
              <h1 className="text-xl font-semibold lg:text-3xl">iPOS Systems</h1>
              <small>May 2022 - Current, Full-stack developer</small>
              <p className="mt-2"> One company, one place, one system for all payment solutions needs.</p>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/company/varivascommunity/" passHref>
            <a rel="noreferrer" target="_blank" className="mt-4 block rounded-xl border border-stone-500 bg-stone-100 p-4 transition-all duration-150 hover:shadow-md lg:p-8">
              <h1 className="text-xl font-semibold lg:text-3xl">Varivas</h1>
              <small>May 2021 - May 2022, Full-stack developer, 1st Employee of the company</small>
              <p className="mt-2">
                Varivas is a platform which connects Pro-FilmMakers(Directors, Producers & Distributors) who want sell films And FilmLovers who want to buy films.
              </p>
            </a>
          </Link>
        </div>

        <div className="mb-20 text-center  leading-relaxed lg:hidden">
          <Link href="mailto:shrihari.uma.1999@gmail.com">
            <a className=" py-1 font-medium ">shrihari.uma.1999@gmail.com</a>
          </Link>
          <div className="mt-2 flex items-center justify-center gap-2">
            <a rel="noreferrer" href="https://twitter.com/papashrihari" target="_blank" >
              <img src='/icons/twitter.svg' className="h-5 w-5 hover:cursor-pointer" />
            </a>
            <a rel="noreferrer" href="https://github.com/ShrihariMohan" target="_blank" >
              <img src='/icons/github.svg' className="h-6 w-6 hover:cursor-pointer" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/shriharimohan/" target="_blank" >
              <img src='/icons/linkedin.svg' className="h-6 w-6 hover:cursor-pointer" />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
