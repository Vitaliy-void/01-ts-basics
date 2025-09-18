function getMessage(): Promise<string> {
  return new Promise<string>((resolve: (value: string) => void) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result: string) => console.log(result));