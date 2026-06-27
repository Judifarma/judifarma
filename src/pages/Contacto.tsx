import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
