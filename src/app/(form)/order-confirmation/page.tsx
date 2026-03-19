import React from 'react';
import { fetchData } from '@/lib/fetchData';
import { baseUrl } from '@/lib/api';
import { formatDate } from '@/utils/formatDate';

async function OrderConfirmation({ searchParams}:any) {
    const datas = await searchParams;

    const pageContent = await fetchData(`${baseUrl}/payment-response?ref=${datas.ref}`,{ cache: "no-store" });
    // const pageContent = await fetchData(`https://tmssft.girishandco.com/public/api/payment-response?ref=a641935a-0664-4b67-a03a-99803cdae94c`,{ cache: "no-store" });

    
    const payment_msg = pageContent?.payment_msg;
    

    return (
        <>
            {
            (pageContent?.payment_details?.state === 'CAPTURED' || pageContent?.payment_details?.state === 'AUTHORISED' || pageContent?.payment_details?.state === 'PURCHASED') && (
                <div className='container text-center thank-you container-inside mx-auto py-[50px]'>
                    {/* <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>{pageContent?.msg}</h1> */}
                    <h3 className='text-center text-[#0078bb] text-[40px] font-[700]'>{payment_msg[`${pageContent?.payment_details?.state}`].heading}</h3>
                    <p className='mt-[15px]'>{payment_msg[`${pageContent?.payment_details?.state}`].text}</p>
                    {/* <h6 className='mt-[15px]'>Order ID: #{pageContent?.payment_details.payment_details?.order_id}</h6> */}
                    <div className="flex justify-center">
                       <div className="max-w-lg bg-white border border-[#ddd] p-6 mt-[20px]">
  
                            {/* <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                                Payment Details
                            </h2> */}

                            <div className="overflow-hidden">
                                <table className="w-full text-sm">
                                    <tbody className="divide-y">

                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Delegate Name</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                                        {pageContent?.payment_details.payment_details?.user_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Payment ID</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                                        {pageContent?.payment_details.payment_details?.reference_id}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Order ID</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                                        #{pageContent?.payment_details.payment_details?.order_id}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Amount</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                                        AED {pageContent?.payment_details.payment_details?.amount}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Payment Method</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                                        {pageContent?.payment_details.payment_details?.payment_method}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Card No.</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                                        {pageContent?.payment_details.payment_details?.card_no}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Registration Id</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                                        {pageContent?.payment_details.payment_details?.id}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Status</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium text-green-600">
                                        Success
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-500">Date</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                                        {formatDate(pageContent?.payment_details.payment_details?.created_at)}
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>

                            </div>
                    </div>
                </div>
            ) 
            }
            {
            (pageContent?.payment_details?.state === 'DECLINED' || pageContent?.payment_details?.state === 'FAILED' || pageContent?.payment_details?.state === 'CANCELLED' ) && (
                <div className='container text-center thank-you container-inside mx-auto py-[50px]'>
                    {/* <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>{pageContent?.msg}</h1> */}
                    <h3 className='text-center text-[#0078bb] text-[40px] font-[700]'>{payment_msg[`${pageContent?.payment_details?.state}`].heading}</h3>
                    {/* <h6 className='mt-[15px]'>Order ID: #{pageContent?.payment_details.payment_details?.order_id}</h6> */}
                    <p className='mt-[15px]'>{payment_msg[`${pageContent?.payment_details?.state}`].text}</p>
                </div>
            ) 
            }
        </>
    );
}

export default OrderConfirmation;