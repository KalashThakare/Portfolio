import { JetBrains_Mono } from "next/font/google";
import "./globals.css";



//components

import Header from '@/components/header';
import PageTransition from "@/components/pagetransition";


const JetbrainsMono = JetBrains_Mono({ subsets: ["latin"],weight:["100", "200", "300", "400", "500", "600", "700", "800"],
  variable:'--font-jetbrainnsMono'
 });

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetbrainsMono.className}>
        <Header />
        <PageTransition>

          {children}
        </PageTransition>
        
        
        </body>
    </html>
  );
}
