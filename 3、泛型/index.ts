/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-12 14:47:54
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-12 15:05:50
 */

// 泛型 hello world
function getValue<T>(str: T): T {
    return str
}
getValue('hello world')

// 使用泛型变量
function getArrLength<T>(arr: T[]): T[] {
    console.log(arr.length)
    return arr
}
getArrLength([1, 2, 3])

// 泛型类型
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: <T>(arg: T) => T = identity;

// 泛型约束
interface ILenthWise {
    length: number
}
function test<T extends ILenthWise>(args: T): T {
    console.log(args.length)
    return args
}
