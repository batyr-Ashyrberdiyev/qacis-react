import { FC } from "react";
import { cn } from "@/lib/utils";
import { Cover } from "@/components/layout";
import { useTranslation } from "react-i18next";
import { SpeakersSection } from "@/components/home/speakers-section";

interface Props {
  className?: string;
}

export const Speakers: FC<Props> = ({ className }) => {
  const { t } = useTranslation("home");

  return (
    <div className={cn("", className)}>
      <Cover title={t("speakers.title")} />

      <SpeakersSection />
    </div>
  );
};
