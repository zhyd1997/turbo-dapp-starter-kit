import type { FC } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export type TechCardProps = {
  title: string;
  description: string;
  link: string;
};

export const TechCard: FC<TechCardProps> = (props) => {
  const { title, description, link } = props;

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
