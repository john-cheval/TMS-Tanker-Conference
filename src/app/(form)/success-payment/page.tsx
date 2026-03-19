import React from 'react';
import { fetchData } from '@/lib/fetchData';
import { baseUrl } from '@/lib/api';

async function SuccessPayment({ searchParams}:any) {
    const datas = await searchParams;

    const pageContent = await fetchData(`${baseUrl}/payment-response?ref=${datas.ref}`,{ cache: "no-store" });
    // const pageContent = await fetchData(`https://tmssft.girishandco.com/public/api/payment-response?ref=a641935a-0664-4b67-a03a-99803cdae94c`,{ cache: "no-store" });

    
    const payment_msg = pageContent?.payment_msg;
    

    return (
        <>
            {
            (pageContent?.payment_details?.state === 'CAPTURED' || pageContent?.payment_details?.state === 'AUTHORISED') && (
                <div className='container text-center thank-you container-inside mx-auto py-[50px]'>
                    {/* <h1 className='text-center text-[#0078bb] text-[40px] font-[700]'>{pageContent?.msg}</h1> */}
                    <h3 className='text-center text-[#0078bb] text-[40px] font-[700]'>{payment_msg[`${pageContent?.payment_details?.state}`].heading}</h3>
                    <h6 className='mt-[15px]'>Order ID: #{pageContent?.payment_details.payment_details?.order_id}</h6>
                    <p className='mt-[15px]'>{payment_msg[`${pageContent?.payment_details?.state}`].text}</p>
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

export default SuccessPayment;