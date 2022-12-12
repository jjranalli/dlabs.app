"use client"

type Props = {
  label: string
  isActive: boolean
  setisActive: (args: any) => void
}

export default function Card({ label, isActive, setisActive }: Props) {
  return (
    <div
      className={`flex items-center justify-center py-2 border border-gray-200 rounded-sm shadow-sm cursor-pointer ${
        isActive
          ? "bg-yellow-300 text-white dark:bg-yellow-300 dark:text-white"
          : "hover:bg-gray-100"
      }`}
      onClick={() => setisActive(label)}
    >
      <p>{label}</p>
    </div>
  )
}
