import { cn } from "@/lib/utils.ts";

interface TitleProps {
  title: string;
  classname?: string;
}

function Title({ title, classname }: TitleProps) {
  return (
    <h2
      className={cn(
        "font-bold text-gray-900 !text-2xl md:!text-3xl xl:!text-4xl mb-4",
        classname,
      )}
    >
      {title}
    </h2>
  );
}

function BorderTitle({ title }: TitleProps) {
  return (
    <div className="w-fit flex-col px-4  md:px-6 py-2 md:py-4 border-3 border-primary-red-800">
      <h2 className="uppercase text-2xl md:text-3xl xl:text-4xl text-primary-red-800 !font-jetbrains-mono !font-bold">
        {title}
      </h2>
    </div>
  );
}

export { Title, BorderTitle };
