import CardForm from "./CardForm";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen flex flex-col sm:flex-row sm:py-[60px]">
      <div className="sec-content h-1/4 sm:h-auto mt-[60px] sm:mt-0 relative sm:w-1/4">
        <div className="w-full px-4 sm:p-0  absolute top-0 sm:top-auto sm:mt-0 sm:left-0 sm:inset-y-4">
          <CardForm />
        </div>
      </div>
      <div className="sec-image w-full h-full relative -z-10">
        <Image
          src="/banner.png"
          alt="banner"
          fill
          className="sm:rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
