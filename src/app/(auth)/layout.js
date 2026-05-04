import React from 'react';
import MiniFooter from '@/app/components/shared/MiniFooter';

const layout = ({children}) => {
    return (
        <main className="py-5 sm:py-10 md:py-15">
            {children}
            <MiniFooter />
        </main>
    );
};

export default layout;