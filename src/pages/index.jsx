import { Head } from "minista"
import Header from "@/layouts/Header";

export default function () {
  return (
    <>
      <Head
        htmlAttributes={{ lang: "ru" }}
        bodyAttributes={{ class: "custom-body" }}
      >
        <title>ImDB</title>
      </Head>
      <Header />
    </>
  )
}
