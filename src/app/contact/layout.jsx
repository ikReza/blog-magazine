import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[whitesmoke] flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
