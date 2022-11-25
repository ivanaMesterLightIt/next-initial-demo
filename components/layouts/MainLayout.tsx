import Head from "next/head"
import Link from "next/link"
import { Navbar } from "../Navbar"
import styles from "./MainLayout.module.css"
import React, { PropsWithChildren } from 'react';

type Props = {};

export const MainLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Ivana</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>
            {children}
          </main>

        </div>
      )
}