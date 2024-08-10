export default function Products(){
    return(
        <div className="mx-[6%]">

            <div className="mt-4 mb-2 font-semibold"><span>Balance: </span><span>$0</span></div>
            <div className="mb-4"><span className="font-semibold">Note:</span> Sign up for a personal account Here if you want to upgrade</div>

            <div className="">
            <div className="flex justify-between flex-wrap mb-4">
                <div className="bg-gray-100 px-16 py-12 shadow-sm w-full lg:w-[49%] mb-6">
                <div><span className="font-semibold">CIDMS: </span> Standard</div>
                <div><span className="font-semibold">Limit: </span> 100000</div>
                <div><span className="font-semibold">Used: </span> 241</div>
                    <div><span className="font-semibold">Buy CIDS more: </span>
                    <span className="border border-gray-300">
                    <select name="cidms_plans" id="cidms_plans"><option id="cidms_planID_1" value="cidms_planID_1">25 cids: 0.09$/1 cid</option><option id="cidms_planID_2" value="cidms_planID_2">50 cids: 0.085$/1 cid</option><option id="cidms_planID_3" value="cidms_planID_3">100 cids: 0.08$/1 cid</option><option id="cidms_planID_4" value="cidms_planID_4">250 cids: 0.075$/1 cid</option><option id="cidms_planID_5" value="cidms_planID_5">500 cids:0.07$/1 cid</option><option id="cidms_planID_6" value="cidms_planID_6">1000 cids: 0.065$/1 cid</option><option id="cidms_planID_7" value="cidms_planID_7">2000 cids: 0.06$/1 cid</option><option id="cidms_planID_29" value="cidms_planID_29">5000 cids: 0.55$/1 cid</option><option id="cidms_planID_30" value="cidms_planID_30">10000 cids: 0.05$/1 cid</option></select>
                    </span>
                    </div>
                </div>
                <div className="bg-gray-100 px-16 py-12 shadow-sm w-full lg:w-[49%] mb-6">
                <div><span className="font-semibold">PIDMS: </span> Standard</div>
                <div><span className="font-semibold">Used: </span> 2441</div>
                    <div><span className="font-semibold">Plan: </span>
                    <span className="border border-gray-300">
                    <select name="pidms_plans" id="pidms_plans"><option id="pidms_planID_8" value="pidms_planID_8">500 requests/24h: 0$/1 month.</option><option id="pidms_planID_9" value="pidms_planID_9">1.000 requests/24h: 5$/1 month.</option><option id="pidms_planID_10" value="pidms_planID_10">2.000 requests/24h: 8$/1 month.</option><option id="pidms_planID_11" value="pidms_planID_11">5.000 requests/24h: 15$/1 month.</option><option id="pidms_planID_12" value="pidms_planID_12">10.000 requests/24h: 25$/1 month.</option><option id="pidms_planID_13" value="pidms_planID_13">20.000 requests/24h: 40$/1 month.</option><option value="planID_101">50.000 requests/24h: inbox.</option></select>
                    </span>
                    </div>
                </div>
                <div className="bg-gray-100 px-16 py-12 shadow-sm w-full lg:w-[49%] mb-6">
                    <div><span className="font-semibold">Redeem: </span> Standard</div>
                    <div><span className="font-semibold">Used: </span> 100000</div>
                    <div><span className="font-semibold">Plan: </span> 
                    <span className="border border-gray-300">
                    <select name="redeem_plans" id="redeem_plans"><option id="redeem_planID_15" value="redeem_planID_15">500 requests/24h: 0$/1 month.</option><option id="redeem_planID_16" value="redeem_planID_16">1.000 requests/24h: 5$/1 month.</option><option id="redeem_planID_17" value="redeem_planID_17">2.000 requests/24h: 8$/1 month.</option><option id="redeem_planID_18" value="redeem_planID_18">5.000 requests/24h: 15$/1 month.</option><option id="redeem_planID_19" value="redeem_planID_19">10.000 requests/24h: 25$/1 month.</option><option id="redeem_planID_20" value="redeem_planID_20">20.000 requests/24h: 40$/1 month.</option><option id="redeem_planID_21" value="redeem_planID_21">50.000 requests/24h: 70$/1 month.</option><option value="planID_101">100.000 requests/24h: inbox.</option></select>
                    </span>
                    </div>
                </div>
                <div className="bg-gray-100 px-16 py-12 shadow-sm w-full lg:w-[49%] mb-6">
                <div><span className="font-semibold">Office365: </span> Standard</div>
                <div><span className="font-semibold">Used: </span> 100000</div>
                    <div><span className="font-semibold">Plan: </span>
                    <span className="border border-gray-300">
                    <select name="office365_plans" id="office365_plans"><option id="office365_planID_23" value="office365_planID_23">500 requests/24h: 0$/1 month.</option><option id="office365_planID_24" value="office365_planID_24">1.000 requests/24h: 5$/1 month.</option><option id="office365_planID_25" value="office365_planID_25">2.000 requests/24h: 8$/1 month.</option><option id="office365_planID_26" value="office365_planID_26">5.000 requests/24h: 15$/1 month.</option><option id="office365_planID_27" value="office365_planID_27">10.000 requests/24h: 25$/1 month.</option><option id="office365_planID_28" value="office365_planID_28">20.000 requests/24h: 40$/1 month.</option><option value="planID_101">50.000 requests/24h: inbox.</option></select>
                    </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}