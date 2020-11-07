import { ajaxCallData } from './const'

export function AjaxCallAction(data) {
    console.log("I am a action")
    return {
        type: ajaxCallData,
        payload: data
    }
}

