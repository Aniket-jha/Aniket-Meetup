import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from 'next/router'
import Head from "next/head";
import { Fragment } from "react";
const NewMeetup = () => {
   const router= useRouter();
    const addMeetupHandler= async (enteredMeetupData)=>{
        const response= await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }

        });
        const data= await response.json();
        console.log(data);
        router.push('/')
       
    }
    return (
        <Fragment>
        <Head>
            <title>Adding New Meetup</title>
             <meta
          name="description"
          content="Add a meetup and find me"
        />
        </Head>
       <NewMeetupForm onAddMeetup={addMeetupHandler} />
       </Fragment>
    )
}

export default NewMeetup;
