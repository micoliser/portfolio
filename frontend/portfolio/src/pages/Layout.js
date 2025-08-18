import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.35,
            ease: "easeInOut",
          }}
          style={{ minHeight: "80vh" }}
        >
          <main>
            <Outlet />
          </main>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default Layout;
