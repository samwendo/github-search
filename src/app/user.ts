export class User {

  constructor(public name: string,
              public login: string,
              // tslint:disable-next-line:variable-name
              public avatar_url: string,
              // tslint:disable-next-line:variable-name
              public html_url: string,
              // tslint:disable-next-line:variable-name
              public public_repos: number,
              // tslint:disable-next-line:variable-name
              public created_at: Date,
              public followers: number,
              public following: number
              ) {}
}
