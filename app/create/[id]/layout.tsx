import { ReactNode } from "react";

export default function LayoutCreation({childern}: {childern: ReactNode}){
    return (
        <div className="mt-10">
            {childern}
        </div>
    )
}