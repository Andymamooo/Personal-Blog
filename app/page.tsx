import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className = "px-6 mx-auto">
      <p className="mt-12 mb-12 text-5xl text-center dark:text-white">
        <span className = "whitespace-nowrap">
          Hi there,I&apos;m <span className="font-bold">Andy</span>.
        </span>
      </p>
      <Posts/>
    </main>
  )
}
