export class raya {
  columns: number = 4;
  rows: number = 7;
  celdas: string[][];

  constructor() {
    this.celdas = new Array(this.columns)
      .fill("a")
      .map(() =>
        new Array(this.rows).fill("a")
      );
  }

}
