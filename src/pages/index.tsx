import { Footer } from "../components/footer/footer";
import { Layout } from "../components/layout/layout";
import { Navbar } from "../components/navbar/navbar";
import { Section01 } from "../components/page01/section01";
import { Section02 } from "../components/page01/section02";
import { Section03 } from "../components/page01/section03";

export default function Home() {
  return (
    <>
      <div>
        <Layout>
          <Section01 />
          <Section02 />
          <Section03 />
        </Layout>
      </div>
    </>
  );
}
