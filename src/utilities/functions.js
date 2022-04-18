export function formatDate(date) {
  if (!date) return "";

  const newDate = new Date(date);
  const year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;

  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${newDate
    .getDate()
    .toString()
    .padStart(2, "0")}`;

  return formattedDate;
}

export function monetizeAmount(amount) {
  if (!amount || amount === "") amount = 0;
  let numericAmount = Number(amount);
  return "" + Number(numericAmount.toFixed(2)).toLocaleString();
}

export function serviceError(err, setErrorMessage, setShowError) {
  if (err.response && err.response.data) {
    setErrorMessage(err.response.data.message);
    setShowError(true);
  } else {
    setErrorMessage("An exception occured!");
    setShowError(true);
  }
}

export const handleCopy = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy)
  alert("copied")
}
