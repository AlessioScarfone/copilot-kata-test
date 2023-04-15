// typescript decorators for logging execution time of a function
export function logExecutionTime(shouldLog: boolean, fixed = 4) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            if (shouldLog) {
                console.log(`Method ${propertyKey} took ${fixed ? (t2 - t1).toFixed(fixed) : t2 - t1} milliseconds.`);
            }
            return result;
        };
        return descriptor;
    };
}