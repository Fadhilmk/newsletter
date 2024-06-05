import { NextResponse } from 'next/server';
import { addSubscriberToUser, getSubscribers } from './addSubscribers.js';

export async function POST(req, context) {

    const { params } = context;
    const subscriberData = await req.json();
    try{
        await addSubscriberToUser(params.userId, subscriberData);
        return NextResponse.json({ success: true});
    } catch(error){ 
        console.error(error);
        return NextResponse.json({ success: false });
    }
}

export async function GET(req, context) {
    const { params } = context;
    let subs = [];
    const subscriberDetails = await getSubscribers(params.userId);
    subscriberDetails.forEach(doc => {
        const data = doc.data();
        subs = subs.concat(data);
    })
    return NextResponse.json(subs);
}