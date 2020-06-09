import { getWebId, getName, readSession, writeSession } from './solid-lib';

// export function GetWebId(){
//     return getWebId();
// }

export function GetIdentityProvider(provider){
    return getWebId(provider);
}

export function GetName(webId){
    console.info(webId);
    return getName(webId);
}

export function WriteSession(key, value){
    return writeSession(key, value);
}

export function ReadSession(key){
    return readSession(key);
}