const promiseNew = url => {
  return new Promise((resolve) => {
    const imagen = new Image();
    imagen.src = url;
    imagen.onload = () => resolve();
  })
}

export const waitLoadImages = (callback, ...rest) => {
  return Promise.all(rest.map(promiseNew)).then(callback);
}
