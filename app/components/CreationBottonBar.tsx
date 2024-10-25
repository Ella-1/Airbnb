import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreateONSubmit } from "./SubmitButtons";

export function CreationButtonBar(){
    return (
        <div className="fixed w-full bottom-0 z-10 border-t h-24">
                <div className="flex items-center justify-between mx-auti px-5 lg:px-10 h-full">
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/">
                        Cancel
                        </Link>
                    </Button>
                    <CreateONSubmit />
                </div>
            </div>
    )
}