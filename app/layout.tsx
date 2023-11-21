import ReduxProvider from "@core/redux/ReduxProvider";
import { signIn, useSession } from "next-auth/react";
import App from "./App";
import AppSessionProvider from "./core/auth/AppSessionProvider";

import Script from "next/script";
import { SideBar, NavBar, Footer } from "@core/ui/layout/components";

import {UIToast} from '@core/infrastructure/ui/components';

//theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";



/*
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children } : RootLayoutProps) {
  
 
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Admin Dashboard</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/css/app.css" rel="stylesheet" />
        <link href="/css/custom.css" rel="stylesheet" />
      </head>
      <body>
        
          <AppSessionProvider>            
          <UIToast />
            <App>
            <div className="wrapper">
            <SideBar />

            <div className="main">
              <NavBar />              
              <main className="content">
                {children}
              </main>

              <Footer />
            </div>
          </div>
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            id="bootstrap"
          />
          <Script id="show-banner">
            {`setTimeout(() => { initialize(); console.log("Sidebar init")}, 1000);`}
          </Script>
          <Script src="/js/modules/sidebar.js" id="sidebar" />
            </App>
          </AppSessionProvider>
        
      </body>
    </html>
  );
}