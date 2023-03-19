import * as functions from "firebase-functions";
import {adminDb} from './firebaseAdmin';
// import * as admin from 'firebase-admin';
//  import {db} from './firebase';

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript


//
const fetchResults : any = async (id: string,) =>{
  const api_key = "471caea4-9756-40dd-92c9-90be63cb2dff";//process.env.BRIGHTDATA_API_KRY;
 try {
  const res = await fetch(`https://api.brightdata.com/dca/dataset?id=${id}`,
  {
    method:'GET',
    headers:{
      Authorization:`Bearer ${api_key}`,
    }
  }
  );
  const data = await res.json();
 // const data = await  JSON.parse(JSON.stringify(res))
   if(data.status == 'building' || data.status == "collecting"){
    console.log("Not complete yet");
   return fetchResults(id);
   } 
  return data;

 } catch (error) {
  console.log("error",error)
 }
};

export const onScraperComplete = functions.https.onRequest(async (request, response) => {
    console.log("Scraper complete >>>>",request.body);

    const {success,id, finished } = request.body;
    if (!success){
      await 
      adminDb.collection('search').doc(id).set({
        status:'Error',
        updateAt:finished//admin.firestore.Timestamp.now(),
      },{
        merge:true,
      })

    }
    const data = await fetchResults(id);  
     await adminDb.collection('search').doc(id).set({
      status:'Complete',
      updateAt:finished,//admin.firestore.Timestamp.now(),
      results:data,
     
     },
     {
      merge:true
    }
     )  
  functions.logger.info("Hello logsssssssssssss!", {structuredData: true});
  response.send("Scraping is finished");

});
