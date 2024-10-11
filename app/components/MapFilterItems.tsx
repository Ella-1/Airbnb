"use client"
import { categoryItems } from "@/lib/categoryItems";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export default function(){
    const searchParams = useSearchParams()
    const search = searchParams.get('filter')
    const pathname = useSearchParams()

    const createQueryString = useCallback(
        (name:string, value:string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name,value)
            return params.toString()
        }, [searchParams]
    )
    return (
        <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar items-center" >
           {categoryItems.map((items) => (
                <Link key={items.id} href={pathname + "?" + createQueryString('filter', items.name)}
                    className={cn(
                        search === items.name ? "border-b-2 border-black pb-2 flex-shrink-0" : "opacity-70 flex-shrink-0", "flex flex-col gap-y-3 items-center"
                    )}
                >
                    <div className="relative w-6 h-6">
                        <Image src={items.imageUrl} alt="category images" className="w-6 h-6"
                     
                        width={24}
                        height={24}
                        />
                    </div>
                    <div className=" text-xs font-medium">{items.title}</div>
                </Link>
           ))}
        </div>
    )
}