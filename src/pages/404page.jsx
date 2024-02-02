import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header"
import { Page404 } from "@/components/ui/Page404";

export default function page404 () {
return(
    <div className="h-[100vh]">
        <Header />
        <Page404 />
        <Footer />
    </div>
)
}