import Footer from '@/component/shared/Footer';
import Header from '@/component/shared/Header';
import React from 'react';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Header />
                {children}
            <Footer />
        </main>
    );
}
