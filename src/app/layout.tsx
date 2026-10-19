import React from "react";
import ClientRootProvider from "@/providers/ClientRootProvider";

export const metadata = {
  title: "محمد خسروی | Mohammad Khosravi - Software Engineer & Fullstack Developer",
  description: "وب‌سایت شخصی و پورتفولیو محمد خسروی، مهندس نرم‌افزار و توسعه‌دهنده فول‌استک | Mohammad Khosravi Personal Portfolio & Blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Vazirmatn:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientRootProvider>{children}</ClientRootProvider>
      </body>
    </html>
  );
}
