const truncateString = (value: string, numberOfLettersAllowed: number) => {
  return value.length > numberOfLettersAllowed
    ? value?.substring(0, numberOfLettersAllowed - 1) + "..."
    : value;
};

export default truncateString;
