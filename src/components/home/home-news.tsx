import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../layout";
import { Loading, NewsCard } from "../shared";
import { Button } from "../ui";
import { useNews } from "@/services/hooks/use-news";
import { Link } from "react-router-dom";
import { useLangStore } from "@/store/lang";

interface Props {
  className?: string;
}

export const News: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useNews(lang);

  return (
    <section
      className={cn(
        "bg-[url('/geo-bg.png')] bg-no-repeat bg-cover py-16",
        className
      )}
    >
      {isPending ? (
        <Loading />
      ) : (
        <Container className="flex flex-col gap-8">
          <h3 className="text-3xl text-on_primary">
            {lang === "ru" ? "Новости" : "News"}
          </h3>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {data?.slice(0, 3).map((item) => (
              <NewsCard className="!bg-[#E0E6EB]" {...item} key={item.title} />
            ))}
          </div>

          <Link to="news" className="md:w-fit w-full mx-auto">
            <Button variant={"outline"} className="w-full">
              {lang === "ru" ? "Все новости" : " All news"}
            </Button>
          </Link>
        </Container>
      )}
    </section>
  );
};
