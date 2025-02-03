import Image from "next/image";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Products from './components/Products/Products';


export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Products />
    </div>
  );
}
