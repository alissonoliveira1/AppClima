


export const parseDate = (data = "") => {

    const [year, mount, day] = data.split("/")


    const date = new Date();

    date.setFullYear(year,mount,day)


    return date;

}