import { format } from "date-fns-tz";

const formatDate = (dateString: string) => {
  const formatString = "dd-MM-yyyy";

  const formattedDate = format(new Date(dateString), formatString, {
    timeZone: "Etc/GMT+3",
  });
  return formattedDate;
};


export { 
    formatDate
}