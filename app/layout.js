import Layout from "@minota/components/Layouts/Layout";
import "@minota/styles/globals.css";

export const metadata = {
  title: "minota",
  description: "Organiza tus calificaciones.",
};

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>;
}
