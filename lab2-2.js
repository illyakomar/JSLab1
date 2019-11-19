function isIPAddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true)  
    }  
    alert("You have entered an invalid IP address!")  
    return (false)  
  }  

function findRGB(text){
    if (/(rgb\(((([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*){2}([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\)))|(rgba\(((([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*){3}(1|1.0*|0?.\d)\)))/.test(text)) {  
        return (text)  
    }  
    return (null)  
}

function findHexColor(text){
    let hexColor = /\#(([0-9]|[a-fA-f]){3}){1,2}/g;
    let result;

    if (text.match(hexColor)) {
        result = text.match(hexColor);
        return result;
    }
    else
        return null;
}

function findTags(text, tag){
    let tags = new RegExp("\\b" + tag + "\\b");
    let result;

    if (text.match(tags)) {
        result = text.match(tags);
        return result;
    }
    else
        return null;
}

function findPosNum(text){
    let posNum=/\d+\.?\d*/g;
    let result;
    if (text.match(posNum)) {
        result = text.match(posNum);
        return result;
    }
    else
        return null;
    
}

function findDates(text){
    let date=/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g;
    let result;
    if (text.match(date)) {
        result = text.match(date);
        return result;
    }
    else
        return null;
}

function findEmail(text){
    let email=/(\S+)@(\S+)\.(\S+)/g;
    let result;
    if (text.match(email)) {
        result = text.match(email);
        return result;
    }
    else
        return null;
}


 

