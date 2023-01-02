export function delayExecution<T>(
    msDelay: number,
    resolver?: () => T,
    preExecution?: () => void
): Promise<T>;
