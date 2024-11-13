import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapFilterItems } from "./components/MapFilterItems";
import prisma from "@/lib/db";
import { ListingCart } from "./components/ListingCart";

async function getData() {
  const data = await prisma.home.findMany({
    where: {
        addedCategory: true,
        addedLoaction: true,
        addedDescription: true,
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true
    }
  })

  return data;
}
export default async function Home() {

  const data  = getData();
  return (
    <div  className="container mx-auto px-5 lg:px-10">
      <MapFilterItems />
      <div>
        {(await data).map((item) => (
          <ListingCart key={item.id} description={item.description as string} imagePath={item.photo as string} location={item.country as string} price={item.price as number}/>
        ))}
      </div>
    </div>
    );
}




