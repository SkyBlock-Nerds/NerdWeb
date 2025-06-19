export function ensureInstanceOf<T extends object>(obj: object, clazz: new () => T): T {
    if (obj && !(obj instanceof clazz)) {
        const fixed = new clazz();
        Object.assign(fixed, obj);
        return fixed;
    }
    return obj;
}