import React from 'react';
import MainLayout from "../layout/MainLayout";
import SectionLayout from "../layout/SectionLayout";
import Sections from "../components/sections/Sections";

const Books = () => {
    return (
        <MainLayout>
            <SectionLayout>
                <Sections />
            </SectionLayout>
        </MainLayout>
    );
};

export default Books;
