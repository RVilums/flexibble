import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

export const metadata = {
  title: "Flexible",
  description: "Showcase and discover remarable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
