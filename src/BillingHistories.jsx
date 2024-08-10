export default function BillingHistories() {
    return (
        <div className="mx-[6%] my-4">
            <div className="font-semibold mb-4">Billing History</div>
            <div>
                <table className="border-collapse border border-slate-400 table-fixed">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 w-32" >Type payment</th>
                            <th className="border border-slate-300 w-32">Description</th>
                            <th className="border border-slate-300 w-32">Amount</th>
                            <th className="border border-slate-300 w-32">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 text-center">Bkash</td>
                            <td className="border border-slate-300 text-center">For PID</td>
                            <td className="border border-slate-300 text-center">$33</td>
                            <td className="border border-slate-300 text-center">28.08.2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}