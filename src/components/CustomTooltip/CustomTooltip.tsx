import { Info } from "lucide-react";
import { CustomTooltipProps } from "./CustomTooltip.types";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const CustomTooltip = (props: CustomTooltipProps) => {
  const { content } = props;

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Info strokeWidth={1} className="h-5 w-5"/>
          </TooltipTrigger>
          <TooltipContent>
            <p>{content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default CustomTooltip;
