import {cn} from "@/lib/utils.ts";

interface TitleProps {
  title: string, classname?: string
}

const Title = ({title, classname}: TitleProps) => {
  return (
    <h2 className={cn("font-bold text-gray-900 !text-2xl md:!text-3xl xl:!text-4xl mb-8", classname)}>
      {title}
    </h2>
  )
}
export default Title
