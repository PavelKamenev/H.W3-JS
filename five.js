 let dayWeek = prompt("Days of the week: ");

 switch (dayWeek) {
    case "Monday":
    case "monday":
    case "Wednesday":
    case "wednesday":
    case "Friday":
    case "friday":
    case "Saturday":
    case "saturday":
    case "Sunday":
    case "sunday":
        console.log('Today relax');
        break;
     case "Tuesday":
     case "tuesday":
     case "Thursday":
     case "thursday":
        console.log('Today study');
        break;
    default:
        alert('NO day week');
        console.log('No day week');
    break;
}