class DateConverter {
  constructor() {
    throw new Error("This class should not be instatiated.");
  }

  static toText(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static toDate(text) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(text)) {
      throw new Error("The date format should be dd/mm/aaaa.");
    }
    return new Date(
      ...text
        .split("/")
        .reverse()
        .map((item, index) => item - (index % 2))
    );
  }
}
