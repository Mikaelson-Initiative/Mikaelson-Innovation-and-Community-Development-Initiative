import { Download, Home, MoveLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggler"

const WaitlistNavbar: React.FC<{ onExportAll?: () => void }> = ({ onExportAll }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b dark:border-neutral-800">
      <div className="flex items-center gap-4 min-w-0">
        <Link href="/admin/dashboard" aria-label="Back to Admin"><MoveLeft /></Link>
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src="/assets/images/mikaelsonlogo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-10 rounded-sm shrink-0"
          />
          <span className="font-semibold truncate hidden lg:*:flex">Waitlist Management</span>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-end">
        <button
          className="bg-teal-500 items-center gap-2 px-3 py-2 rounded text-white text-sm hidden lg:flex"
          onClick={onExportAll}
        >
          <Download className="size-4" />
          <span className="hidden lg:inline">Export All</span>
        </button>
        <Link href="/admin/dashboard" className="bg-teal-500 items-center gap-2 px-3 py-2 rounded text-white text-sm hidden lg:flex">
          <Home className="size-4" />
          <span className="">Dashboard</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  )
}

export default WaitlistNavbar