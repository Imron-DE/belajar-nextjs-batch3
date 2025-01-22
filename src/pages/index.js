import Button from "@/components/Button";
import ButtonWithProps from "@/components/ButtonWithProps";
import Card from "@/components/CardWithChildren";
import Image from "next/image";

export default function Home() {
  // anggap ini data dari API
  const data = {
    name: "John Doe",
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-4">
        {/* button biasa */}
        <button className="h-10 px-6 font-semibold bg-blue-500 hover:bg-blue-700 text-white">Click me!</button>
        {/* button dengan basis komponen {single close tag}*/}
        <Button />
        {/* button dengan props*/}
        <ButtonWithProps text={data.name} className="bg-red-500 hover:bg-red-700" />
        {/* komponen dengan props children*/}
        <Card CardClassname={"border p-4"}>
          <Image src="/next.svg" alt="Vercel Logo" width={300} height={300} />
          <h2 className="text-xl font-bold my-3">Card Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, aliquid. </p>
          <ButtonWithProps text={"test"} className=" w-full bg-yellow-500 hover:bg-yellow-700" />
        </Card>
      </div>
    </>
  );
}
