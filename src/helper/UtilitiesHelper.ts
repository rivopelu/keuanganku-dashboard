export class UtilitiesHelper {
  public mbToByte(num: number): number {
    return 1024 ** 3 * num;
  }

  public byteToMb(num: number, string = true): string {
    const calc = num / 1024 ** 2;
    const int = calc.toFixed(2);
    if (string) {
      return int + " Mb";
    } else {
      return int;
    }
  }

  public paginatedCalc(size: number, count: number) {
    const calculate = count / size;
    return Math.ceil(calculate);
  }

  checkValidDate(date: Date): boolean {
    return !isNaN(date.getTime());
  }

  public suspendConsole() {
    console.warn = () => {
      return;
    };
    console.info = () => {
      return;
    };
  }
}
