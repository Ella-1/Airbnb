import { useEffect, useState } from "react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut, MenuIcon } from "lucide-react";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export  async function UserNav() {
  
    const { getUser } = getKindeServerSession();
            const user = await getUser();

  
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                <MenuIcon className="w-6 h-6 lg:w-5" />
                <img
                    src={user?.picture  ?? "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png"}
                    alt="user image"
                    className="rounded-full h-8 w-8 hidden lg:block"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px] shadow-sm bg-transparent rounded-2xl bg-gray-100">
            {user ? (  
                <DropdownMenuItem className="py-2 px-2  bg-red-500 rounded-2xl">
                     <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
                       
                    ) : (
                        <>
                            <DropdownMenuItem className="py-2 px-2">
                                <RegisterLink>Register</RegisterLink>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="py-2 px-2">
                                <LoginLink>Login</LoginLink>
                            </DropdownMenuItem>
                        </> 
                    )}      
                
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
