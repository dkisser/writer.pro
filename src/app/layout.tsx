import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChildrenType } from "@/@core/types";
// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Writer.pro - One-stop chatGPT AI research assistant - Writer.pro",
  description: "Writer.pro powered by GPT4 provides One-stop AI research tools , including AI chat, writer, reader, AI detector, PPT generator and more.",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const direction = 'ltr'
//   return (
//     <html id='__next' dir={direction}>
//       <body className="className='flex is-full min-bs-full flex-auto flex-col'">
//         {children}
//       </body>
//     </html>
//   );
// }
const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
    </html>
  )
}

export default RootLayout
