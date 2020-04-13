class DateConverter {
  constructor() {
    throw new Error("This class should not be instatiated.");
  }

  static toText(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static toDate(text) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(text)) {
      throw new Error("The date format should be aaaa-mm-dd.");
    }
    return new Date(
      ...text.split("-").map((item, index) => item - (index % 2))
    );
  }
}
