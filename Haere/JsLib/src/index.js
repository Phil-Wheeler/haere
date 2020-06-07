import { getWebId, getName } from './solid-lib';

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