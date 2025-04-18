import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  text: string;
  className?: string;
  img: string;
  link: string;
  button: string;
}

export const OfferCard: FC<Props> = ({
  className,
  title,
  text,
  img,
  link,
  button,
}) => {
  return (
    <article
      className={cn(
        "sm:px-8 sm:py-6 p-4 relative overflow-hidden h-[296px] sm:w-full w-[300px] text-on_primary",
        className
      )}
    >
      <div className="absolute size-full z-10  top-0 left-0 bg-gradient-to-r from-25% from-primary to-primary/20 " />
      <img
        src={img}
        className="absolute size-full top-0 right-0 object-cover"
      />

      <div className="relative z-20 h-full">
        <h4 className="sm:text-2xl text-lg mb-4 max-w-[444px] z-20 h-16">
          {title}
        </h4>
        <p className="sm:text-base text-sm normal max-w-[360px] z-20">{text}</p>

        <Link
          className="absolute bottom-0 left-0 z-50"
          target="_blank"
          to={link}
        >
          <Button
            className="text-sm px-0 h-fit py-0 z-20 text-white"
            variant={"link"}
          >
            {button} <ArrowUpRight />
          </Button>
        </Link>
      </div>
    </article>
  );
};
