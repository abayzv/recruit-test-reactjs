import React from "react";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        <main>
            {children}
        </main>
    </>
}