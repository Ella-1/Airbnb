"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { categoryItems } from "@/lib/categoryItems"
import Image from "next/image"
import { useState } from "react"

export function SelectCategory(){
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined)
   return (
    <div className="grid grid-cols-4 md:grid-col-3 sm:grid-col-2 mt-10 gap-8 w-3/5 mx-auto mb-36">
    <input type="hidden" name="categoryName" value={selectedCategory as string} />
    {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
            <Card className={selectedCategory === item.name ? 'border-primary border-2': ''}
            onClick={() => setSelectedCategory(item.name)}
            >
                {/* render image and title */}
                <CardHeader>
                     <Image src={item.imageUrl} alt={item.description} height={32} width={35} className="w-8 h-8" />
                     <h2 className="font-medium" >{item.title}</h2>
                </CardHeader>
            </Card>
        </div>
    ))}
</div>
   )
}