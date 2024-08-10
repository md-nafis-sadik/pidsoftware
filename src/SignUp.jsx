export default function SignUp() {

    const divStyle = {
        backgroundImage: 'url("./background.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
    };


    return (

        <div style={divStyle} className="flex justify-center items-center">
            <div className="bg-white w-full p-12 h-[100vh] sm:h-auto sm:w-[450px] shadow-lg">
                <div className="w-28"><img src="./logo.png"></img></div>
                <div className="text-2xl font-semibold text-gray-900 mt-5 mb-4">Create account</div>
                <from>
                    <div className="pb-4">
                        
                        <div className="inline-block w-full">
                            <input className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3 focus:outline-none" placeholder="Email eg: someone@example.com"></input>
                        </div>
                    </div>
                    <div className="pb-4 flex justify-between">
                        <button className="bg-gray-200 px-4 py-1 mr-6 hover:bg-gray-300 w-44">Verify email</button>
                        <span className="w-full">
                            <input className=" w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3 focus:outline-none" placeholder="Verification code"></input>
                        </span>
                    </div>
                    <div className="pb-4">
                       
                        <div className="inline-block w-full">
                            <input className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3 focus:outline-none" placeholder="Passowrd"></input>
                        </div>
                    </div>
                    <div className="pb-4">
                        
                        <div className="inline-block w-full">
                            <input className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3 focus:outline-none" placeholder="Confirm password"></input>
                        </div>
                    </div>
                    <div className="flex justify-end"><button className="bg-[#0067b8] text-white px-8 py-1 hover:bg-[#005ba0]">Register</button></div>
                </from>
            </div>
        </div>
    );
}