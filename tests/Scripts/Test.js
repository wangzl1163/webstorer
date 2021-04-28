/* eslint-disable no-undef */

/**
 * 描述
 * @param {string} name 块名称
 * @param {function} fn 分组函数
 */
const $describe = function (name, fn) {
   describe(name, fn)
}

/**
 * 全等断言
 * @param {any} source 源
 * @param {any} target 全等的目标
 * @param {function} fun it回调
 */
const assertEquals = function (source, target, fun = null) {
   it('value == ' + target.toString() + '  ', fun || function () {
      expect(source).toEqual(target)
   })
}

/**
 * 值精确相等断言
 * @param {any} source 源
 * @param {any} target 目标
 * @param {function} fun it回调
 */
const assertBe = function (source, target, fun = null) {
   it('value to be ' + target.toString() + '  ', fun || function () {
      expect(source).toBe(target)
   })
}

/**
 * 字符串匹配。检查对具有 toMatch 正则表达式的字符串。
 * @param {any} source 源
 * @param {any} reg 正则表达式
 * @param {function} fun it回调
 */
const assertMatch = function (source, reg, fun = null) {
   it('value to match ' + reg.toString() + '  ', fun || function () {
      expect(source).toMatch(reg)
   })
}

/**
 *
 * @param {Promise} sourcePromise 异步函数返回的Promise
 * @param {any} target 断言目标
 * @returns 断言结果
 */
const assertBeAsync = function (sourcePromise, target) {
   return expect(sourcePromise).resolves.toBe(target)
}

module.exports = {
   describe: $describe,
   assertEquals: assertEquals,
   assertBe: assertBe,
   assertBeAsync: assertBeAsync,
   assertMatch: assertMatch
}
