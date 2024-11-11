import Image from "next/image";
import myImage from "../../public/images/avatar.jpg";

export default function Intro() {
  return (
    <div className="flex items-center justify-center">
      <section className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Hi, I'm Robert and I am a passionate developer from Romania, currently
          studying for my bachelor's degree in Computer Science.
        </p>
      </section>
      <div className="flex items-center justify-center">
        <Image
          src={myImage}
          alt="Picture of the author"
          width={700}
          height={500}
          className="rounded-full"
          priority
        />
      </div>
    </div>
  );
}
