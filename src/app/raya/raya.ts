export class raya {
  columns: number = 3;
  rows: number = 3;
  celdas: string[][];

  constructor() {
    this.celdas = new Array(this.columns)
      .fill("a")
      .map(() =>
        new Array(this.rows).fill("")
      );
  }

}
