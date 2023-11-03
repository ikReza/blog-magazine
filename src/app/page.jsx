import Subscribe from "@/components/Subscribe";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  // console.log(allBlogs);
  return (
    <main>
      <section>Blog Item</section>
      <section>Unique Section-2</section>
      <section>Unique Section-3</section>
      <section>
        <Subscribe />
      </section>
    </main>
  );
}
