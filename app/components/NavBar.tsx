import Link from "next/link";
import Image from 'next/image';
import DesktopLogo from '../../public/airbnb-desktop.png';
import MobileLogo from '../../public/airbnb-mobile.webp'; // Ensure this is the correct mobile image
import { UserNav } from "./UserNav";

export default function Navbar() {
    return (
        <div className="w-full border-b">
            <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
                <Link href="/">
                    <Image src={DesktopLogo} alt="Desktop logo" className="w-32 hidden lg:block" />
                    <Image src={MobileLogo} alt="Mobile logo" className="w-12 block lg:hidden" />
                </Link>
                <div className="rounded-full border px-5 py-2" >
                    <h1>Hello from the search</h1>
                </div>
                <UserNav /> 
                
            </div>
        </div>
    );
}

