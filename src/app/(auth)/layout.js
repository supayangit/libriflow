import React from 'react';

const layout = ({children}) => {
    return (
        <main className="py-5 sm:py-10 md:py-15">
            {children}
        </main>
    );
};

export default layout;