import { MainNav } from './components/main-nav'
// import ThemeProvider from "@/components/theme-provider";
import { Button } from "@/components/ui/button"
import { UserCircle } from 'lucide-react'
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <UserCircle className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">User account</span>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

