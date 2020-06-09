import auth from 'solid-auth-client';
import { fetchDocument } from "tripledoc";
import { foaf } from "rdf-namespaces";

export async function getWebId(provider){
    /* 1. Check if we've already got the user's WebID and access to their Pod: */
    let session = await auth.currentSession();
    if (session) {
      return session.webId;
    }
  
    /* 2. Initiate the login process - this will redirect the user to their Identity Provider: */

    auth.login(provider);
}


export async function getName(webId) {
  /* 1. Fetch the Document at `webId`: */
  const webIdDoc = await fetchDocument(webId);
  /* 2. Read the Subject representing the current user's profile: */
  const profile = webIdDoc.getSubject(webId);
  /* 3. Get their foaf:name: */
  return profile.getString(foaf.name);
}

export async function readSession(key){
  return sessionStorage.getItem(key);
}

export async function writeSession(key, value){
  return sessionStorage.setItem(key, value);
}