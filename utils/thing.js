export function delayExecution(msDelay, resolver, preExecution) {
    return new Promise((resolve) => {
        if (preExecution) {
            preExecution();
        }
        setTimeout(
            !resolver
                ? () => resolve()
                : () => {
                      const result = resolver();
                      if (result instanceof Promise) {
                          result.then((result) => resolve(result));
                      } else {
                          resolve(result);
                      }
                  },
            msDelay
        );
    });
}
