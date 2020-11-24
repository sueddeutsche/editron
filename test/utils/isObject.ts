// eslint-disable-next-line arrow-parens
export default function isObject(data: any): boolean {
    return Object.prototype.toString.call(data) === "[object Object]";
}
