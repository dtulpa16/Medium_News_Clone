import Navbar from "@/app/components/Navbar";
import Modal from "@/app/components/modals/ModalLayout";
import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fbc121]">
      <Navbar />
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
  );
}
