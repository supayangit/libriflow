import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";

export default function HomeLayout({ children }) {
  return (
    <main>
        <Header />
        {children}
        <Footer />
     </main>
  );
}
