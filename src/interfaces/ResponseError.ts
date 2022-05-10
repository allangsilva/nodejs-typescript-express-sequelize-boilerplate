class ResponseError extends Error {
  code: number;

  constructor(m: string, code: number) {
    super(m);

    this.code = code;
    Object.setPrototypeOf(this, ResponseError.prototype);
  }

  get response() {
    return { message: this.message, code: this.code };
  }
}

export default ResponseError;
