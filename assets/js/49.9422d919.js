(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{276:function(_,v,e){"use strict";e.r(v);var o=e(2),r=Object(o.a)({},function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"协变与逆变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协变与逆变","aria-hidden":"true"}},[_._v("#")]),_._v(" 协变与逆变")]),_._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance",target:"_blank",rel:"noopener noreferrer"}},[_._v("原文链接: what are covariance and contravariance"),e("OutboundLink")],1)])]),_._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Subtyping",target:"_blank",rel:"noopener noreferrer"}},[_._v("子类型"),e("OutboundLink")],1),_._v(" 在编程理论上是一个复杂的话题，而他的复杂之处来自于一对经常会被混淆的现象，我们称之为"),e("em",[_._v("协变")]),_._v("与"),e("em",[_._v("逆变")]),_._v("。这篇文章将会解释上述两个概念。")]),_._v(" "),e("p",[_._v("开始文章之前我们先约定如下的标记：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("A ≼ B")]),_._v(" 意味着 "),e("code",[_._v("A")]),_._v(" 是 "),e("code",[_._v("B")]),_._v(" 的子类型。")]),_._v(" "),e("li",[e("code",[_._v("A → B")]),_._v(" 指的是以 "),e("code",[_._v("A")]),_._v(" 为参数类型，以 "),e("code",[_._v("B")]),_._v(" 为返回值类型的函数类型。")]),_._v(" "),e("li",[e("code",[_._v("x : A")]),_._v(" 意味着 "),e("code",[_._v("x")]),_._v(" 的类型为 "),e("code",[_._v("A")]),_._v("。")])]),_._v(" "),e("h2",{attrs:{id:"一个有趣的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个有趣的问题","aria-hidden":"true"}},[_._v("#")]),_._v(" 一个有趣的问题")]),_._v(" "),e("p",[_._v("假设我有如下三种类型：")]),_._v(" "),e("blockquote",[e("p",[e("code",[_._v("Greyhound ≼ Dog ≼ Animal")])])]),_._v(" "),e("p",[e("code",[_._v("Greyhound")]),_._v(" （灰狗）是 "),e("code",[_._v("Dog")]),_._v(" （狗）的子类，而 "),e("code",[_._v("Dog")]),_._v(" 则是 "),e("code",[_._v("Animal")]),_._v(" （动物）的子类。由于子类型通常是可传递的，因此我们也称 "),e("code",[_._v("Greyhound")]),_._v(" 是 "),e("code",[_._v("Animal")]),_._v(" 的子类。")]),_._v(" "),e("p",[e("strong",[_._v("问题")]),_._v("：以下哪种类型是 "),e("code",[_._v("Dog → Dog")]),_._v(" 的子类呢？")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("Greyhound → Greyhound")])]),_._v(" "),e("li",[e("code",[_._v("Greyhound → Animal")])]),_._v(" "),e("li",[e("code",[_._v("Animal → Animal")])]),_._v(" "),e("li",[e("code",[_._v("Animal → Greyhound")])])]),_._v(" "),e("p",[_._v("让我们来思考一下如何解答这个问题。首先我们假设 "),e("code",[_._v("f")]),_._v(" 是一个以 "),e("code",[_._v("Dog → Dog")]),_._v(" 为参数的函数。它的返回值并不重要，为了具体描述问题，我们假设函数结构体是这样的： "),e("code",[_._v("f : (Dog → Dog) → String")]),_._v("。")]),_._v(" "),e("p",[_._v("现在我想给函数 "),e("code",[_._v("f")]),_._v(" 传入某个函数 "),e("code",[_._v("g")]),_._v(" 来调用。我们来瞧瞧当 "),e("code",[_._v("g")]),_._v(" 为以上四种类型时，会发生什么情况。")]),_._v(" "),e("p",[e("strong",[_._v("1. 我们假设 "),e("code",[_._v("g : Greyhound → Greyhound")]),_._v("， "),e("code",[_._v("f(g)")]),_._v(" 的类型是否安全？")])]),_._v(" "),e("p",[_._v("No, because f might try to call its argument (g) with a different subtype of Dog, like a GermanShepherd.\n不安全，因为在f内调用它的参数"),e("code",[_._v("(g)")]),_._v("函数时，使用的参数可能是一个不同于灰狗但又是狗的子类，例如 "),e("code",[_._v("GermanShepherd")]),_._v(" （牧羊犬）。")]),_._v(" "),e("p",[e("strong",[_._v("2. 我们假设 "),e("code",[_._v("g : Greyhound → Animal")]),_._v("， "),e("code",[_._v("f(g)")]),_._v(" 的类型是否安全？")])]),_._v(" "),e("p",[_._v("不安全。理由同(1)。")]),_._v(" "),e("p",[e("strong",[_._v("3. 我们假设 "),e("code",[_._v("g : Animal → Animal")]),_._v("， "),e("code",[_._v("f(g)")]),_._v(" 的类型是否安全？")])]),_._v(" "),e("p",[_._v("不安全。因为 "),e("code",[_._v("f")]),_._v(" 有可能在调用完参数之后，让返回值，也就是 "),e("code",[_._v("Animal")]),_._v(" （动物）狗叫。并非所有动物都会狗叫。")]),_._v(" "),e("p",[e("strong",[_._v("4. 我们假设 "),e("code",[_._v("g : Animal → Greyhound")]),_._v("， "),e("code",[_._v("f(g)")]),_._v(" 的类型是否安全？")])]),_._v(" "),e("p",[_._v("是的，它的类型是安全的。首先，"),e("code",[_._v("f")]),_._v(" 可能会以任何狗的品种来作为参数调用，而所有的狗都是动物。其次，它可能会假设结果是一条狗，而所有的灰狗都是狗。")]),_._v(" "),e("h2",{attrs:{id:"展开讲讲？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展开讲讲？","aria-hidden":"true"}},[_._v("#")]),_._v(" 展开讲讲？")]),_._v(" "),e("p",[_._v("如上所述，我们得出结论：")]),_._v(" "),e("blockquote",[e("p",[e("code",[_._v("(Animal → Greyhound) ≼ (Dog → Dog)")])])]),_._v(" "),e("p",[_._v("返回值类型很容易理解：灰狗是狗的子类。但参数类型则是相反的：动物是狗的"),e("em",[_._v("父类")]),_._v("！")]),_._v(" "),e("p",[_._v("用合适的术语来描述这个奇怪的表现，可以说我们允许一个函数类型中，返回值类型是"),e("em",[_._v("协变")]),_._v("的，而参数类型是"),e("em",[_._v("逆变")]),_._v("的。返回值类型是协变的，意思是 "),e("code",[_._v("A ≼ B")]),_._v(" 就意味着 "),e("code",[_._v("(T → A) ≼ (T → B)")]),_._v(" 。参数类型是逆变的，意思是 "),e("code",[_._v("A ≼ B")]),_._v(" 就意味着 "),e("code",[_._v("(B → T) ≼ (A → T)")]),_._v(" （ "),e("code",[_._v("A")]),_._v(" 和 "),e("code",[_._v("B")]),_._v(" 的位置颠倒过来了）。")]),_._v(" "),e("p",[e("strong",[_._v("一个有趣的现象")]),_._v("：在 "),e("code",[_._v("TypeScript")]),_._v(" 中， "),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-function-parameters-bivariant",target:"_blank",rel:"noopener noreferrer"}},[_._v("参数类型是双向协变的"),e("OutboundLink")],1),_._v("\n，也就是说既是协变又是逆变的，而这并不安全。但是现在你可以在 "),e("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[_._v("TypeScript 2.6")]),e("OutboundLink")],1),_._v(" 版本中通过 "),e("code",[_._v("--strictFunctionTypes")]),_._v(" 或 "),e("code",[_._v("--strict")]),_._v(" 标记来修复这个问题。")]),_._v(" "),e("h2",{attrs:{id:"那其他类型呢？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#那其他类型呢？","aria-hidden":"true"}},[_._v("#")]),_._v(" 那其他类型呢？")]),_._v(" "),e("p",[e("strong",[_._v("问题")]),_._v("："),e("code",[_._v("List<Dog>")]),_._v(" 能否为 "),e("code",[_._v("List<Animal>")]),_._v(" 的子类？")]),_._v(" "),e("p",[_._v("答案有点微妙。如果列表是不可变的（immutable），那么答案是肯定的，因为类型很安全。但是假如列表是可变的，那么答案绝对是否定的！")]),_._v(" "),e("p",[_._v("原因是，假设我需要一串 "),e("code",[_._v("List<Animal>")]),_._v(" 而你传给我一串 "),e("code",[_._v("List<Dog>")]),_._v("。由于我认为我拥有的是一串 "),e("code",[_._v("List<Animal>")]),_._v(" ，我可能会尝试往列表插入一只 "),e("code",[_._v("Cat")]),_._v("。那么你的 "),e("code",[_._v("List<Dog>")]),_._v(" 里面就会有一只猫！类型系统不应该允许这种情况发生。")]),_._v(" "),e("p",[_._v("总结一下，我们可以允许不变的列表（immutable）在它的参数类型上是协变的，但是对于可变的列表（mutable），其参数类型则必须是不变的（invariant），既不是协变也不是逆变。")]),_._v(" "),e("p",[e("strong",[_._v("一个有趣的现象")]),_._v("：在 "),e("code",[_._v("Java")]),_._v(" 中，数组"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Covariance_and_contravariance_%28computer_science%29#Covariant_arrays_in_Java_and_C.23",target:"_blank",rel:"noopener noreferrer"}},[_._v("既是可变的，又是协变的"),e("OutboundLink")],1),_._v("。当然，这并不安全。")])])},[],!1,null,null,null);v.default=r.exports}}]);