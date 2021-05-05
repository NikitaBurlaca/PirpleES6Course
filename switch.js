




const checkInteger = (value) => !isNaN(value) && value >= 0;

const vLabels = ["seconds", "second", "minutes", "minute", "days", "day", "hours", "hour"];

const checkLabelList = (label) => vLabels.indexOf(label) !== -1;

const isvLabels = (value, label) => {
    switch (label) {
        case "second": 
        case "minute":
        case "day":  
        case "hour":
            return (value === 1) ? true : false;
        case "seconds": 
        case "minutes":
        case "days": 
        case "hours":
            return (value === 1) ? false : true;
        default: 
        console.log("Bad label input");
        return false;
    }
}

const minutesToSeconds = 60;
const hoursToSeconds = minutesToSeconds * 60;
const dayToSeconds = hoursToSeconds * 24;

const convertSeconds = (value, label) => {
    switch (label) {
        case "second":  
        case "seconds":
           return value;
        case "minute":  
        case "minutes":
           return value * minutesToSeconds;
        case "hour":   
        case "hours":
           return value * hoursToSeconds;
        case "day":  
        case "days":
           return value * dayToSeconds;
        default:
            console.log("Unconvertable!");
            return false;

    }
}

const convertToBiggest = (seconds) => {
    if (seconds % dayToSeconds === 0){
        const days = seconds / dayToSeconds;
        return (days === 1) ? [days, 'day'] : [days, 'days'];
    } else if (seconds % hoursToSeconds === 0){
        const hours = seconds / hoursToSeconds;
        return (hours === 1) ? [hours, 'hour'] : [hours, 'hours'];
    } else if (seconds % minutesToSeconds === 0) {
        const minutes = seconds / minutesToSeconds;
        return (minutes === 1) ? [minutes, 'minute'] : [minutes, 'minutes'];
    } else {
        return (seconds === 1) ? [seconds, 'second'] : [seconds, 'seconds'];
    }
}

const timeAdder = (value1, label1, value2, label2) => {

    if (!checkInteger(value1)) {
        return false;
    }

    if (!checkInteger(value2)){
        return false;
    }

    if (!checkLabelList(label1)){
        return false;
    }

    if (!checkLabelList(label2)){
        return false;
    }

    if (!isvLabels(value1, label1)) {
        return false;
    }

    if (!isvLabels(value2, label2)) {
        return false;
    }
    
    const seconds1 = convertSeconds(value1, label1);
    const seconds2 = convertSeconds(value2, label2);

    const res = seconds1 + seconds2;

    return convertToBiggest(res);
}


console.log(timeAdder( 1, "minute",   3, "minutes"));
console.log(timeAdder( 5, "days",    25, "hours"));
console.log(timeAdder( 1, "minute", 240, "seconds"));

console.log(timeAdder( 2, "minutes", 2, "days")); // incorect, because 2 is plural.
console.log(timeAdder( {}, "minutes", 3, "hours")) // incorect,  because bad input

