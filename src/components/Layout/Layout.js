import Navbar from "@/components/navbar/Navbar";
// import "../../pages/globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <>
            <ThemeProvider>
                <div className="container">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    );
}