import Image from "next/image";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";


export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}
