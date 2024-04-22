import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Vercel from "../../public/vercel.svg"
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar/>
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">NextJs Dashboard</h3>
          <p>Become full-stack developer with NextJs</p>
          <div className="flex justify-center my-10">
            <Image src = {Vercel} width = {300} height = {0} alt = "Vercel Logo"/>
          </div>
        </div>
        <Footer/>
      </Container>
      
    </main>
  );
}
