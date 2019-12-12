/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-12 13:14:53
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-12 13:45:08
 */

// boolean
let isShow: boolean = false

// number
let height: number = 172
let speed: number = 9.58

// string
let fullname: string = 'zhoujingyuan'

// array
let nums: number[] = [1, 2, 3]
let fruits: Array<string> = ['apple', 'watermelon']

// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
let data: [number, string] = [18, 'zjy']

// 枚举
enum Colors { Red, Green, Blue }
let color: Colors.Red

// any
let value: any
value = ''
value = undefined

let values: any[]
values = []
values = [null]

// void
function test(): void {
    console.log('no return')
}

// null undefiend
let a: null = null
let b: undefined = undefined

// never
// never类型表示的是那些永不存在的值的类型。 
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
// 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
function getMes(str: string): never {
    throw new Error('error')
}
function getMesssage(str: string) {
    throw new Error('error')
}

// object
declare function create(o: object | null): void
create({})
create(null)

// 类型断言
let str: any = "good boy"
let strLenth: number = (str as string).length






