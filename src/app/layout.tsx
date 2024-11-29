import { Inter } from "next/font/google";
import { ChildrenType } from "@/@core/types";
// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' dir={direction}>
      <head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </head>
      <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
    </html>
  )
}

export default RootLayout
