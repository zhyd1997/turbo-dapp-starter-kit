import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="px-8">
      <main className="min-h-screen py-16 flex-1 flex flex-col justify-center items-center">
        <ConnectButton />

        <h1 className="my-12 text-4xl leading-none text-center">
          Welcome to{' '}
          <a href="https://www.rainbowkit.com" className="text-[#0d76fc] no-underline hover:underline focus:underline active:underline">
            RainbowKit
          </a>{' '}
          +{' '}
          <a href="https://wagmi.sh" className="text-[#0d76fc] no-underline hover:underline focus:underline active:underline">
            wagmi
          </a>{' '}
          +{' '}
          <a href="https://nextjs.org" className="text-[#0d76fc] no-underline hover:underline focus:underline active:underline">
            Next.js!
          </a>
        </h1>

        <p className="mb-8 text-2xl leading-normal text-center">
          Get started by editing{' '}
          <code className="font-mono">pages/index.tsx</code>
        </p>

        <div className="flex flex-wrap items-center justify-center max-w-[800px] sm:flex-row flex-col w-full">
          <a className="m-4 p-6 text-left no-underline border border-[#eaeaea] rounded-lg transition-colors duration-150 ease-in-out hover:text-[#0d76fc] hover:border-[#0d76fc] focus:text-[#0d76fc] focus:border-[#0d76fc] active:text-[#0d76fc] active:border-[#0d76fc] max-w-[350px]" href="https://rainbowkit.com">
            <h2 className="mb-4 text-xl">RainbowKit Documentation &rarr;</h2>
            <p className="m-0 text-xl leading-normal">Learn how to customize your wallet connection flow.</p>
          </a>

          <a className="m-4 p-6 text-left no-underline border border-[#eaeaea] rounded-lg transition-colors duration-150 ease-in-out hover:text-[#0d76fc] hover:border-[#0d76fc] focus:text-[#0d76fc] focus:border-[#0d76fc] active:text-[#0d76fc] active:border-[#0d76fc] max-w-[350px]" href="https://wagmi.sh">
            <h2 className="mb-4 text-xl">wagmi Documentation &rarr;</h2>
            <p className="m-0 text-xl leading-normal">Learn how to interact with Ethereum.</p>
          </a>

          <a
            className="m-4 p-6 text-left no-underline border border-[#eaeaea] rounded-lg transition-colors duration-150 ease-in-out hover:text-[#0d76fc] hover:border-[#0d76fc] focus:text-[#0d76fc] focus:border-[#0d76fc] active:text-[#0d76fc] active:border-[#0d76fc] max-w-[350px]"
            href="https://github.com/rainbow-me/rainbowkit/tree/main/examples"
          >
            <h2 className="mb-4 text-xl">RainbowKit Examples &rarr;</h2>
            <p className="m-0 text-xl leading-normal">Discover boilerplate example RainbowKit projects.</p>
          </a>

          <a className="m-4 p-6 text-left no-underline border border-[#eaeaea] rounded-lg transition-colors duration-150 ease-in-out hover:text-[#0d76fc] hover:border-[#0d76fc] focus:text-[#0d76fc] focus:border-[#0d76fc] active:text-[#0d76fc] active:border-[#0d76fc] max-w-[350px]" href="https://nextjs.org/docs">
            <h2 className="mb-4 text-xl">Next.js Documentation &rarr;</h2>
            <p className="m-0 text-xl leading-normal">Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            className="m-4 p-6 text-left no-underline border border-[#eaeaea] rounded-lg transition-colors duration-150 ease-in-out hover:text-[#0d76fc] hover:border-[#0d76fc] focus:text-[#0d76fc] focus:border-[#0d76fc] active:text-[#0d76fc] active:border-[#0d76fc] max-w-[350px]"
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2 className="mb-4 text-xl">Next.js Examples &rarr;</h2>
            <p className="m-0 text-xl leading-normal">Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className="m-4 p-6 text-left no-underline border border-[#eaeaea] rounded-lg transition-colors duration-150 ease-in-out hover:text-[#0d76fc] hover:border-[#0d76fc] focus:text-[#0d76fc] focus:border-[#0d76fc] active:text-[#0d76fc] active:border-[#0d76fc] max-w-[350px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2 className="mb-4 text-xl">Deploy &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex flex-1 py-8 border-t border-[#eaeaea] justify-center items-center">
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank" className="flex justify-center items-center flex-grow">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default HomePage
