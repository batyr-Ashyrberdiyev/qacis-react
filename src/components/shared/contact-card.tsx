import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  suptitle: string;
  title: string;
  img: string;
}

export const ContactCard: FC<Props> = ({ className, suptitle, title, img }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <img src={img} alt="contact icon" />

      <div className="flex flex-col gap-2">
        <h5 className="text-sm text-[#454545]">{suptitle}</h5>
        <h4 className="text-[#171717] semibold">{title}</h4>
      </div>
    </div>
  );
};
