import Image from "next/image"
import Link from "next/link"

const Contactcard = ({ props }: any) => {

  const { title, icon, id, link, iconLink, color }: any = props

  return (
    <div
      className={`h-[400px] w-[800px] rounded-lg border border-zinc-600 ease-in-out duration-500 hover:border-zinc-800 `}
    >
      <div className="h-full w-full gap-4 flex flex-col justify-center items-center">
        <div className="text-xl bold">{id}</div>
        <Link href={`${link}`} className="hover:h-120 hover:w-120">
          <Image
            src={`${iconLink}`}
            alt={`${title}`}
            height="100"
            width="100"
            className="rounded-lg"
          />
        </Link>
        <div className="text-4xl">{title}</div>
      </div>
    </div>
  )
}

export default Contactcard
