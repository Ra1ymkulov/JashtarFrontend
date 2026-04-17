import Footer from "@/src/widgets/footer/Footer";
import Header from "@/src/widgets/header/Header";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
