import Navbar from "./Navbar";

export default function ContactUs(){
    return(
        <section>
            <Navbar />
            <div className="text-center md:text-left text-2xl bg-[#0067b8] text-white font-light py-2 px-6 lg:px-12 xl:px-20">Contact Support</div>
            <div className="py-4 px-6 lg:px-12 xl:px-20">
                <div className="text-[#0067b8]">Facebook: Fb.com/TiCLimited</div>
                <div>Email: ticltd@gmail.com</div>
            </div>
        </section>
    );
}