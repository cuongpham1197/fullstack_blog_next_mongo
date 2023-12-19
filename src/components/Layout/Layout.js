import Navbar from "@/components/navbar/Navbar";
// import "../../pages/globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/components/AuthProvider/AuthProvider"

// import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <>
            <ThemeProvider>
                <AuthProvider>
                    <div className="container">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}