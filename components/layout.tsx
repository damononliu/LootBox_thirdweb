import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import usePackEvents from "../hooks/usePackEvents";

type Props = {
  title: string;
};

export default function Layout(
  props
: React.PropsWithChildren<Props>) {
  // console.log(props);
  usePackEvents();
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto my-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-bold text-blue-600">{props.title}</h1>
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
}
