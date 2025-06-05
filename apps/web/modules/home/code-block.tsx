import type { FC } from "react";

export type CodeBlockProps = {
  code: string;
};

export const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { code } = props;

  return (
    <div className="relative rounded-lg bg-muted p-3 sm:p-4 overflow-hidden">
      <pre className="overflow-x-auto text-xs sm:text-sm max-w-full">
        <code className="language-tsx whitespace-pre-wrap sm:whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
};
