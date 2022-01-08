// ジェネリック型とは他の特定の型と結合された型のこと。
// 追加の型の情報を持たせること
// つまり配列もジェネリックの一つ
// Array<T>と出てきたらジェネリックの一つ
// 例１）Array<string>（他の型はstring）
// 例２）Array<number>（他の型はnumber）
// 下記のように書いてあった場合、
// Genericでstringを渡すことができているので、array型に対して使えるsplit関数を使うことができる
// const names: Array<string>  = [];
// names[0].split(' ');
// Generic型は汎用型とも呼ばれる　
// Promise型もGeneric型である
// Promiseはresolveとrejectの２つの関数を受け取る
// 特定の型のpromiseを受け取る
// promiseは最終的には何らかの型を返してあげる必要がある
// 下記の例は、promiseが文字列を返してresolveすることを示してあげるようにした書き方
// const promise = new Promise<string>((resolve,reject) => {
//   setTimeout(() => {
//     resolve('終わりました!');
//   },2000);
// })
// extendsをつけることでGenericsに制約をつけることができる。
// 下の書き方で、objectしか受け付けなくなった。stringでもnumberでも、union型で stirng | number でもOK 
// TかUのどちらか一方にだけ制約をつけることもできる。
function myMerge(objA, objB) {
    return Object.assign(objA, objB);
}
// この変数の型は関数を実行した時に同的に決まる
// 関数に渡している引数から型を推論して当てはめてくれる
// 意図的に後ろに30を渡すと、merge関数はオブジェクト同士を結合させようとする(Object.assign)のでエラーも警告も出さずに暗黙的に失敗する。
// Argument of type 'number' is not assignable to parameter of type 'object'.
// const myMergedObj = myMerge({"name": "Sou", "hobbies": ["Sports"]},23)
var myMergedObj = myMerge({ "name": "Sou", "hobbies": ["Sports"] }, { "age": 23 });
console.log(myMergedObj);
// elementという引数を受け取るが、これもジェネリック型
// 下記は典型的なGenericの使い方
// 型のTが曖昧なため下記のエラーが出るので、上のinterfaceをつける
// Property 'length' does not exist on type 'T'
// 関数の戻り値を明確にするために戻り値の型をtupleにする
// TはGenericなのでどんな型でもありうる。Lengthyの制約だけがある
function countAndDescribe(element) {
    var descriptionText = "値がありません";
    if (element.length) {
        descriptionText = "値は" + element.length + "個です。";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
