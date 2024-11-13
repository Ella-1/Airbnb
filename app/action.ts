"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { supabase } from "@/lib/superbase";

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
} else if (data.addedCategory && data.addedDescription && !data.addedLoaction){
  return redirect(`/create/${data.id}/address`)
} else if (data.addedCategory && data.addedDescription && data.addedLoaction) {
  const data = await prisma.home.create({
    data: {
      userId: userId,
    },
  });
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

  export async function CreateDescription (formData:FormData) {
       const title = formData.get('title') as string
       const description = formData.get('description') as string
       const price = formData.get('price')
       const imageFile = formData.get('image') as File
       const getGuest = formData.get('guests') as string
       const roomNumber = formData.get('room') as string
       const bathRoom = formData.get('bathroom') as string
       const homeId = formData.get('homeId') as string 

       const { data: imageData, error } = await supabase.storage.from('images').upload(
        `${imageFile.name}-${new Date()}`, 
        imageFile, 
        {
          cacheControl: '2592000', // cache image for a certain period of time (1 year)
          contentType: 'image/png',
        }
      );
      
      if (error) {
        console.error("Error uploading image:", error.message);
        throw new Error("Image upload failed");
      }
      
      console.log("Image uploaded successfully:", imageData);
      

       const data = await prisma.home.update({
        where: {
          id: homeId,
        },
        data: {
          title:title,
          description:description,
          price:Number(price),
          bedrooms:roomNumber,
          bathrooms:bathRoom,
          guests:getGuest,
          photo: imageData?.id,
          addedDescription: true,
        }
       });
      
       return redirect(`/create/${homeId}/address`)
  }

export async function createLocation(formData:FormData) {
  const homeId = formData.get('homeId') as string;
  const countryValue = formData.get('countryValue') as string;

  const data = await prisma.home.update({
        where: {
          id: homeId,
    },
    data: {
      addedLoaction: true,
      country: countryValue,
    }
  });

  return redirect('/');
}