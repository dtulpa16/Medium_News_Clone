import Navbar from "@/app/components/Navbar";
import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen md:mt-0 mt-6 bg-[#fbc121]">
        <SignIn
          appearance={{
            baseTheme: neobrutalism,
            elements: {
              formButtonPrimary:
                "bg-[#ffc017] hover:bg-[#fbc121] text-sm text-black normal-case",
              footerActionLink: "text-black",
            },
          }}
        />
      </div>
    </>
  );
}
