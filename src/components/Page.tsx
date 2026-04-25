
/**
 * Componants
 **/
import { Button } from "./ui/button"
import { ModeToggle} from './ui/ModeToggle'

/**
 * Assets
 **/
import { SearchIcon,Settings2Icon,DownloadIcon } from "lucide-react"


export function Page({ children }: React.PropsWithChildren) {
  return (
    <div className="px-4 py-8 md:p-8">{children}</div>
  )
}

export function PageHeader(){
    return(
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
            <h1 className="text-xl font-semibold lg:text-2xl">Wlcome back, Sadee</h1>
            <div className="flex gap-3 ">

                <div className="flex max-lg:hidden">
                    <Button variant="ghost" size='icon'> <ModeToggle /> </Button>
                    <Button variant="ghost" size='icon'> <SearchIcon /> </Button>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline">
                        <Settings2Icon />
                        <span>Customize</span>
                    </Button>
                    <Button variant="outline">
                        <DownloadIcon />
                        <span>Export</span>
                    </Button>
                </div>

            </div>

        </div>
    )
}