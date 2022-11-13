export const now = (): Date => new Date();

export const yesterday = (): Date => {
    const n = now();
    n.setDate(n.getDate() - 1);
    return n;
};

export const tomorrow = (): Date => {
    const n = now();
    n.setDate(n.getDate() + 1);
    return n;
};
