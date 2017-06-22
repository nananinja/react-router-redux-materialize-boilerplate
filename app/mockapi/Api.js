class Api {
  constructor(fn) {
    this.fn = fn;
  }

  success(...params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.fn(...params)), 500);
    });
  }

  fail(...params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(this.fn(...params)), 500);
    })
  }
}

export default Api;
