"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/db";

export async function createAirbnbHome({ userId }: { userId: string }) {
  const data = await prisma.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAT: "desc",
    },
  });

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/structure`);
  } else if (
    !data.addedCategory &&
    !data.addedDescription &&
    !data.addedLoaction
  ) {
    return redirect(`/create/${data.id}/structure`);
  } else if (data.addedCategory && !data.addedDescription) {
    return redirect(`/create/${data.id}/description`);
  } else if (
    data.addedCategory &&
    data.addedDescription &&
    !data.addedLoaction
  ) {
    return redirect(`/create/${data.id}/address`);
  } else if (
    data.addedCategory &&
    data.addedDescription &&
    data.addedLoaction
  ) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/structure`);
}
}



export async function createCategoryPage(formData: FormData) {
    const categoryName = formData.get("categoryName") as string;
    const homeId = formData.get("homeId") as string;
    const data = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        categoryName: categoryName,
        addedCategory: true,
      },
    });
  
    return redirect(`/create/${homeId}/description`);
  }

  async function CreateDescription (formData:FormData) {
       const title = formData.get('title') as string
       const description = formData.get('description') as string
       const price = formData.get('price')
       const imageFile = formData.get('image') as File
       const getGuest = formData.get('guests') as string
       const roomNumber = formData.get('room') as string
       const bathRoom = formData.get('bathroom') as string
  }