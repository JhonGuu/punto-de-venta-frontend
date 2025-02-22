export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="flex min-h-screen items-center justify-center">
            
            {children}
        </main>
      </body>
    </html>
  );
}
