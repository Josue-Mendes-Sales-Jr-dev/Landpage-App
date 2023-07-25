import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = (props: LayoutProps) => {
  return (
    <>
      <div className="w-screen min-h-[100vh] bg-black">
        <Navbar />
        <div>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};
