import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[whitesmoke] flex flex-col min-h-screen border border-red-600">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
