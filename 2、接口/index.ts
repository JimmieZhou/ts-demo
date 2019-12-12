/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-12 13:48:29
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-12 14:41:36
 */

//  接口定义
interface IInfo {
    name: string,
    age: number
}
function getInfo(info: IInfo): void {
    console.log(JSON.stringify(info))
}
let info = { name: 'zjy', age: 18, sex: 'male' }
getInfo(info)

// 可选属性
interface IInfo2 {
    name: string,
    age: number,
    sex?: string
}
function getInfo2(info: IInfo2): string {
    if (info.sex) {
        return `your sex is ${info.sex}`
    }
    return 'without input sex'
}
let info2 = { name: 'zjy', age: 18, sex: 'male' }
getInfo2(info2)

// 只读属性
interface IPoint {
    readonly x: number,
    readonly y: number
}
let arr: ReadonlyArray<number> = [1, 2, 3]

// const VS readonly
// const:用于变量
// readonly:用于接口中的属性

// 函数类型
interface ISearchFun {
    (str1: string, str2: string): number
}
let fun: ISearchFun = function (s1, s2) {
    return s1.indexOf(s2)
}
fun('abc', 'ab')

// 可索引类型
interface IIndex {
    [index: number]: string
}
let myarr: IIndex = ['zjy', 'jimmie']
let str: string = myarr[0]

// 类类型

// 实现接口
interface IClock {
    date: Date
    setDate(d: Date)
}
class Clock implements IClock {
    date: Date
    setDate(d: Date) {
        this.date = d
    }
    constructor(h: number, s: number) {

    }
}

// 继承接口
interface IPerson {
    contry: string
}
interface IChinese extends IPerson {
    name: string
}
let chinese: IChinese = { name: 'china', contry: "world" }







