function solution(D){
    const days = {"Mon": null,"Tue": null,"Wed": null, "Thu": null,"Fri": null, "Sat": null, "Sun": null};
    const daysArray = [0, 0, 0, 0, 0, 0, 0];
    for(let key in D){
        var day = (new Date(key)).getDay();
        daysArray[day] = daysArray[day] + D[key];
    }
    for(let day=0; day<daysArray.length; day++){
        daysArray[day] == 0 ? daysArray[day] = (daysArray[day - 1] * 2) - daysArray[day - 2] : false;
        switch(day){
            case(1): 
            days['Mon'] = daysArray[day];
            break;
            case(2):
            days['Tue'] = daysArray[day];
            break;
            case(3):
            days['Wed'] = daysArray[day];
            break;
            case(4):
            days['Thu'] = daysArray[day];
            break;
            case(5):
            days['Fri'] = daysArray[day];
            break;
            case(6):
            days['Sat'] = daysArray[day];
            break;
            case(0):
            days['Sun'] = daysArray[day];
            break;
        }
    }
    return days;
}