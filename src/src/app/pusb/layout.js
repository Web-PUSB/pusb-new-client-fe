import Footer from "./src/components/shared/Footer";
import Header from "./src/components/shared/Header";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="scroll-smooth">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
