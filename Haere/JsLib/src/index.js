import { getWebId, doTest } from './solid-lib';

export function GetWebId(){
    return getWebId();
}


window.GetIdentityProvider = (provider) => {
    console.info(provider);
}