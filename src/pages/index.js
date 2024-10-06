import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useSocket } from "@/context/SocketProvider";
import TableComponent from "@/components/TableComponent";
import { AXIOS } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { socket } = useSocket();

  const [data, setData] = useState();

  const eventListener = (data) => {
    console.log('data', data)
    setData(data);
  }

  useEffect(() => {
    if (!socket) return;
    socket.on("FILTER", eventListener);
    return () => {
      socket.off("FILTER", eventListener);
    }

  }, [socket]);

  const runStatergy = async () => {
    try {
      await AXIOS.post("statergy/run")
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={runStatergy}>Run Statergy</button>
      {data && <TableComponent data={data} />}
    </main>
  );
}
