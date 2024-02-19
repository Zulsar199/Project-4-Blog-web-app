import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/layout/Contact";
import { ContactHeader } from "@/components/layout/ContactHeader";

export default function ContactUs() {
  return (
    <div>
      {/* <Header /> */}
      <ContactHeader />
      <Contact />
      <Footer />
    </div>
  );
}
