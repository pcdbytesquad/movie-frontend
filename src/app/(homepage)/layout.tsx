"use client"

import Header from "@/components/Header"; 
import { Container } from "@mui/material";
const HomepageLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
            <Header />
            <main className="py-2">
                <Container>
                {children} 
                </Container>
            </main>
        </div>
    )
}

export default HomepageLayout;