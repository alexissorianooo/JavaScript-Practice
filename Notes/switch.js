let day = ""


switch(day){
    case "monday":
        console.log("7am");
        break;
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("4am");
        break;
    case "friday":
        console.log("9am");
        break;
    case "saturday":
    case "sunday":
        console.log("8am");
        break;
    default:
        console.log("lol what");
}