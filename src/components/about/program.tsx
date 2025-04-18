import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { useStaticWords } from "@/services/hooks/use-static-words";
import { useLangStore } from "@/store/lang";

interface Props {
  className?: string;
}

export const Program: FC<Props> = ({ className }) => {
  const { data } = useStaticWords("2");
  const lang = useLangStore((state) => state.lang);

  const title = data?.find((item) => item.key === "about_7")?.text;
  const subtitle = data?.find((item) => item.key === "about_8")?.text;

  const titles = data?.find((item) => item.key === "program_title")?.list;
  const contents = data?.find((item) => item.key === "program_content")?.list;

  const getLangText = (ruText: string, enText: string) =>
    lang === "ru" ? ruText : enText;

  return (
    <section className={cn("md:py-20 py-10", className)}>
      <Container>
        <h2 className="text-3xl mb-6 text-center">{title}</h2>
        <h4 className="md:text-xl text-lg mb-4 normal text-center">
          {subtitle}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6">
          {titles?.map((item, i) => (
            <article
              key={i}
              className="md:p-4 p-2 rounded-[2px] bg-gradient-to-t from-[#D8E6F3] to-[#EFF5FA]"
            >
              <h4 className="md:text-xl text-base text-on_primary_container mb-2">
                {getLangText(item.text_ru, item.text_en)}{" "}
              </h4>
              <p className="md:text-base text-sm normal text-on_surface_v">
                {lang === "ru"
                  ? contents?.[i]?.text_ru
                  : contents?.[i]?.text_en}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
