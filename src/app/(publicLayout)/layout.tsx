import Footer from '@/component/shared/Footer';
import Header from '@/component/shared/Header';
import React from 'react';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <div className='min-h-[calc(100vh-228.85px)]'>
                {children}

            </div>
            <Footer />
        </>
    );
}
