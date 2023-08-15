import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        <main className="flex flex-col min-h-screen">
            {children}
            <Footer />
        </main>
    </>
}