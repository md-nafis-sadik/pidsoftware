import { Link } from "react-router-dom";

export default function Login(){
    const divStyle = {
        backgroundImage: 'url("./background.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
    };
    return(
        <div style={divStyle} className="flex justify-center items-center">
            <div className="bg-white w-full p-12 h-[100vh] sm:h-auto sm:w-[450px] shadow-lg">
                <div className="w-28"><img src="./logo.png"></img></div>
                <div className="text-2xl font-semibold text-gray-900 mt-5 mb-4">Login</div>
                <from>
                    <div className="pb-4">
                        
                        <div className="inline-block w-full">
                            <input className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3 focus:outline-none" placeholder="someone@example.com"></input>
                        </div>
                    </div>
                    
                    <div className="pb-4">
                        
                        <div className="inline-block w-full">
                            <input className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3 focus:outline-none" placeholder="passowrd"></input>
                        </div>
                    </div>

                    <div className="text-xs pb-4">No account? <Link to="/sign-up" className="text-blue-700 cursor-pointer hover:underline">Create one!</Link></div>
                    
                    <div className="flex justify-end"><button className="bg-[#0067b8] text-white px-8 py-1 hover:bg-[#005ba0]">Login</button></div>
                </from>
            </div>
        </div>
    );
}