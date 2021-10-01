export const formatData = (sec) => {
    let date = new Date(1970,0,1);
    date.setSeconds(sec);
    console.log(date.toTimeString())
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}