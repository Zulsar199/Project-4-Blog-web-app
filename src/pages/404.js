import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Page404 } from "@/components/ui/Page404";

export default function page404(props) {
  return (
    <div className="h-[100vh]">
      <Header />
      <Page404 />
      <Footer
        position={
          "lg:fixed lg:left-0 lg:right-0 lg:bottom-0 lg:z-19 max-[429px]:fixed max-[429px]:left-0 max-[429px]:right-0 max-[429px]:bottom-0"
        }
      />
    </div>
  );
}
