import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Creation page",
  description: "Creates new page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="mt-10">
        {children}
  </div>
        
  );
}
