export default class Blog {
  constructor(id, imageUrl, description, date, commentCount, authorName, authorProfileUrl) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.description = description;
    this.date = date;
    this.commentCount = commentCount;
    this.authorName = authorName;
    this.authorProfileUrl = authorProfileUrl;
  }
}
