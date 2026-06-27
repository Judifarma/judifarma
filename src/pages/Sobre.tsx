import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
