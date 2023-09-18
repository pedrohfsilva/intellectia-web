import { SessionProvider } from '@/components/SessionProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { Login } from "@/components/Login";
import Page from './page';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IntellectIA',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = await getServerSession(authOptions);

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}


{/* <SessionProvider session={session}> */}
// {!session ? (
//   <Login />
// ) : (
//   <div>
//     {/* {children} */}
//     <Page session={session} />
//   </div>
// )}
// </SessionProvider>
