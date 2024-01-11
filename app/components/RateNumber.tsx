export default function RateNumber({
  children,
  handleClick,
  isSelected = false,
}: {
  children: React.ReactNode
  handleClick: () => void
  isSelected?: boolean
}) {
  const selectedClass = isSelected ? "bg-neutral-medium-grey !text-white" : ""
  return (
    <button
      onClick={handleClick}
      className={`${selectedClass} text-neutral-medium-grey bg-neutral-dark-blue hover:bg-primary-orange flex aspect-square w-[2.625rem] cursor-pointer items-center justify-center rounded-full text-sm font-bold hover:text-white  md:w-[3.1875rem] md:text-base md:leading-6`}
    >
      {children}
    </button>
  )
}
