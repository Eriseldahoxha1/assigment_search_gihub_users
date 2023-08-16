import React from 'react'
import Header from './Header';
import Footer from './Footer';

interface Props {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props): JSX.Element => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout;