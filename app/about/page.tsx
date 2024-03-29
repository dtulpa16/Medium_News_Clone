import Head from "next/head";
import SubPageNavBarCS from "../components/SubPageNavBarCS";

export default function About() {
  return (
    <>
      <SubPageNavBarCS />
      <div className="  flex items-center bg-[#242424] text-white p-4 font-serif ">
        <Head>
          <title>About </title>
        </Head>

        <div className="lg:w-[680px] w-[95%] text-left flex flex-col gap-2 sm:gap-3  pt-16 lg:pt-32 pl-2 sm:pl-8 ">
          <h1 className="leading-[52px] sm:leading-[88px] text-[48px] sm:text-[70px] lg:text-[85px] font-serif font-base mb-6 lg:mb-14 tracking-tight lg:tracking-tight">
            Everyone has a story to tell.
          </h1>
          <span className="tracking-[-0.003em] font-normal">
            <p className="leading-[32px] text-[21px] font-serif mb-4">
              Medium is a home for human stories and ideas. Here, anyone can
              share insightful perspectives, useful knowledge, and life wisdom
              with the world—without building a mailing list or a following
              first. The internet is noisy and chaotic; Medium is quiet yet full
              of insight. Its simple, beautiful, collaborative, and helps you
              find the right audience for whatever you have to say.
            </p>
            <p className="leading-[32px] text-[21px] font-serif mb-4">
              We believe that what you read and write matters. Words can divide
              or empower us, inspire or discourage us. In a world where the most
              sensational and surface-level stories often win, were building a
              system that rewards depth, nuance, and time well spent. A space
              for thoughtful conversation more than drive-by takes, and
              substance over packaging.
            </p>
            <p className="tracking-[-0.009em] leading-[40px] text-[28px] font-light font-serif mb-4 p-2 bg-[#505050]">
              Ultimately, our goal is to deepen our collective understanding of
              the world through the power of writing.
            </p>
            <p className="leading-[32px] text-[21px] font-serif mb-4 ">
              Over 100 million people connect and share their wisdom on Medium
              every month. Many are professional writers, but just as many
              arent—theyre CEOs, computer scientists, U.S. presidents, amateur
              novelists, and anyone burning with a story they need to get out
              into the world. They write about what theyre working on, whats
              keeping them up at night, what theyve lived through, and what
              theyve learned that the rest of us might want to know too.
            </p>
            <p className="leading-[32px] text-[21px] font-serif mb-4 li">
              Instead of selling ads or selling your data, were supported by a
              growing community of Medium members who align with our mission. If
              youre new here, start exploring. Dive deeper into whatever matters
              to you. Find a post that helps you learn something new, or
              reconsider something familiar—and then share your own story.
            </p>
          </span>
          {/* ... more content ... */}
        </div>
      </div>
    </>
  );
}
