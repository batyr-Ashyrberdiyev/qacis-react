import { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "./menu";
import { useUiStore } from "@/store/ui";

interface Props {
  className?: string;
}

export const Burger: FC<Props> = () => {
  const { burger, setBurger } = useUiStore((state) => state);
  const { t } = useTranslation("header");

  const navigation = t("nav.data", { returnObjects: true }) as Array<{
    title: string;
    link?: string;
    drop?: boolean;
    dropDownContent?: {
      text: string;
      link?: string;
      modal?: boolean;
    }[];
  }>;

  return (
    <Sheet onOpenChange={() => setBurger(!burger)} open={burger}>
      <SheetTrigger>
        <div className="flex flex-col gap-1 lg:hidden items-center justify-center size-10">
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
        </div>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetClose />

        <SheetHeader className="mt-16 flex flex-col gap-4">
          <Link to={t("support.link")}>
            <Button className="text-base w-full" variant="secondary">
              {t("support.text")}
            </Button>
          </Link>

          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSd3Fi6liioA_SXCJxxDv0-2DW3SRKuCUmHkkAwK075n0qAExw/viewform"
            target="_blank"
            onClick={() => setBurger(false)}
          >
            <Button className="text-base w-full bg-reverse_primary hover:bg-reverse_primary/90 text-primary_10">
              {t("b2b")}
            </Button>
          </Link>
        </SheetHeader>

        <hr className="opacity-50 mt-10 " />

        <div className="my-5 flex flex-col gap-4"></div>

        <div className="flex flex-col gap-6">
          {navigation.map((item) =>
            !item.drop ? (
              <Link
                onClick={() => setBurger(false)}
                className="flex items-center h-10 text-white"
                key={item.title}
                to={item.link ?? ""}
              >
                {item.title}
              </Link>
            ) : (
              <Menu
                color="white"
                key={item.title}
                title={item.title}
                dropDownContent={item.dropDownContent}
              />
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
