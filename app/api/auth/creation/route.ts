import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser(); // Await the user once

    if (!user || !user.id) {
        throw new Error("User not authenticated or invalid user object");
    }

    let dbUser = await prisma.user.findUnique({
        where: { id: user.id }
    });

    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                email: user.email ?? '',
                firstName: user.given_name ?? '',
                lastName: user.family_name ?? '',
                id: user.id,
                profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
            }
        });
    }

    // Use environment variable for redirection in production
    const redirectUrl = process.env.REDIRECT_URL || "http://localhost:3000/";
    return NextResponse.redirect(redirectUrl);
}
