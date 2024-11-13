import Image from "next/image";
interface iAppProps {
    imagePath : string;
    description: string;
    location: string;
    price: number;
    
} 

export function ListingCart({description, imagePath,location,price}:iAppProps) {
    return (
        <div className="flex flex-col">
           <div className="relative h-72">
                {/* <Image  src={`https://0eb5a841-3e36-4a9b-b1d9-3a675a949b0e.JPG`} alt="image of house" fill className="rounded-lg h-full object-cover mb-3"/> */}
           </div>
        </div>
    )
}