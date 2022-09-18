import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { Navbar, SideBar } from '../ui'


interface Props {
    title: string,
    pageDescription: string,
    imageFullUrl?: string
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                {/* <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                } */}
            </Head>

            <nav>
                <Navbar />
            </nav>

            <SideBar />


            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                {children}
            </main>

            <footer>{/* Custom Footer */}</footer>

        </>


    )
}
