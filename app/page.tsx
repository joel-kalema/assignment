import Nav from "@/components/navbar";
import Header from "./(sections)/_components/hearder";
import Icons from "./(sections)/_components/icons";
import Product from "./(sections)/_components/prducts";
import NavBottom from "@/components/nav-bottom"

export default function Home() {
  return (
    <main className="">
      <Nav />
      <div className="overflow-hidden">
        <Header />
      </div>
      <Icons />
      <Product />
      <NavBottom />
    </main>
  );
}
