
import Navbar from './Navbar';
import Topper from './Topper';


export default function Home() {


    return (
        <section>
        <Navbar />
        <Topper/>
        <div className="mx-[5%] my-4 p-2">

            <div className="w-full md:w-2/3">

                <div className="mb-4">
                    <div className="mb-1">
                        <label htmlFor="lids" className="w-full inline-block mb-2 text-sm font-semibold">Please Enter Your Installation ID: <a href="#">0.05$/1 cid for Get cid</a></label>
                        <textarea id="lids" rows="6" placeholder="Example: 5902836-0957683-1060592-2979381.." className="w-full outline-none rounded-sm border border-gray-400 py-2 px-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"></textarea>
                    </div>
                    <button className="inline-block text-sm px-4 py-2 bg-[#0067b8] rounded-sm text-white font-semibold hover:bg-[#005ba0]">Get Confirmation ID</button>
                </div>

                <div className="block xl:flex my-2 justify-between text-sm">
                    <div className="block md:flex mb-2 lg:m-0">
                        <div className="mb-1 flex md::mb-0">
                        <span className="pr-1 h-10 w-30">
                            <img src="./download.png" className="h-9 w-30"/>
                        </span>
                        <span className="px-1">
                            <input className="outline-none h-9 rounded-sm border border-gray-400 py-2 px-4 focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300"></input>
                        </span>
                        </div>
                        <div className="flex">
                        <span className="px-1 w-12">
                            <img src="./refresh.png" className="h-9"/>
                        </span>
                        <span className="px-1">
                            <button className="inline-block px-4 py-2 bg-[#0067b8] rounded-sm text-white font-semibold hover:bg-[#005ba0]">Verify</button>
                        </span>
                        </div>
                    </div>
                    <div className="text-xs w-full xl:w-44">* You can register a new account to bypass this verification step!</div>
                </div>

                
                    <div className="">
                        <textarea id="textarea-results" rows="10" placeholder="Example: 5902836-0957683-1060592-2979381.." className="w-full outline-none rounded-sm border border-gray-400 py-2 px-4 focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300"></textarea>
                    </div>
                
                <div className="block xl:flex my-1 justify-between ">
                    <div className="xl:order-2"><img src="./3.png"></img></div>
                    <div className="text-xs">
                        <div className="flex">
                            <span>Speed:</span>
                            <span>0.0(sec)/1 CID:</span>
                        </div>
                        <div className="">
                            <span>Powered by TIC Limited</span>
                        </div>

                    </div>
                    
                </div>
                <div className="text-sm">Tip: We can't activate Windows on this device because the product key was already used on another device. If you think it wasn't used on another device, select Troubleshoot below. Error code: OxC004C008.</div>
            </div>

        </div>
        </section>
    );
}