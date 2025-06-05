import type { FC } from "react";

export type FooterProps = {};

export const Footer: FC<FooterProps> = (props) => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ using{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Next.js 15
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Tailwind CSS v4
          </a>
          , and{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
