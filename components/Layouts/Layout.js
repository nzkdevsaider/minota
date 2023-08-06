import Header from "../Header/Header";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <html lang="es" data-theme="minota">
      <body className={inter.className}>
        <main className="m-3 md:m-10 space-y-10">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
