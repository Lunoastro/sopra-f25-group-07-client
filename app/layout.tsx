"use client"; 

//import type { Metadata } from "next";
import "@/styles/globals.css";
import { getWebsocketDomain } from "./utils/domain";
import { WebSocketProvider } from "./hooks/useWebSocket";
import { LocalStorageProvider } from "./hooks/useLocalStorage";



// export const metadata: Metadata = {
//   title: "Group 07",
//   description: "sopra-fs25-group-07",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalStorageProvider>
          <WebSocketProvider url={getWebsocketDomain()}>
            {children}
          </WebSocketProvider>
        </LocalStorageProvider>
      </body>
    </html>
  );
}