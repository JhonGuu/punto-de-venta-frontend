import { CustomIcon } from "@/components"
import { List } from "lucide-react"
import { TableIntegrations } from "../TableIntegrations"

export const ListIntegrations = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 flex-1">
        <div className="flex gap-x-2 items-center">
            <CustomIcon icon={List}/>
            <p className="text-xl">List of integrations</p>
        </div>
        <TableIntegrations/>
    </div>
  )
}
export default ListIntegrations