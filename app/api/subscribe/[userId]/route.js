import { NextResponse } from 'next/server';
import { addSubscriberToUser } from './addSubscribers.js';

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