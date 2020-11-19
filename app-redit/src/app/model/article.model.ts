export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(t: string, l: string, v?: number) {
    this.title = t;
    this.link = l;
    this.votes = v || 0;

  }

  votesDown(): boolean {
    this.votes -= 1;
    return false;
  }

  votesUp(): boolean {
    this.votes += 1;
    return false;
  }

// domain() is a utility function that extracts
// the domain from a URL, which we'll explain shortly
 domain(): string {
  try {
  // e.g. http://foo.com/path/to/bar
  const domainAndPath: string = this.link.split('//')[1];
  // e.g. foo.com/path/to/bar
  return domainAndPath.split('/')[0];
  } catch (err) {
  return null;
  }
 }

}
