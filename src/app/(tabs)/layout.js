import React from 'react';
import Header from "@/app/components/shared/Header";

const TabsLayout = ({ children }) => {
    return (
        <main className=''>
            <Header />
            {children}
        </main>
    );
};

export default TabsLayout;