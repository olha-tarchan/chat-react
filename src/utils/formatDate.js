export const formatDate = (time) => {            //Jun 17,2021
    const month = ["Jan",  "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec"];
    const date = new Date(time);
    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export const formDateMessage = (time) => {      //4/22/17, 4:10AM
    const date = new Date(time);
    const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
    const hours = (date.getHours() > 12 ) ? `${date.getHours()%12}:${minutes}PM` : `${date.getHours()}:${minutes}AM`;
    return `${date.getMonth()+1}/${date.getDate()}/${(date.getFullYear()).toString().slice(-2)}, ${hours}`;
}