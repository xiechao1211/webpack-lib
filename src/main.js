// import Person from './person'
// import Student from './student'
// const getUrl= ()=>{
//     return window.location
// }

// export {
//     Person,
//     Student,
//     getUrl
// }


// const ops = {
//     Person,
//     Student,
//     getUrl
// }
// 以library的方式导出模块
// export default ops
// export {Person, Student, getUrl}
// let t = new Promise((resolve, reject) => {
    
// });
class Ops{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    test(){
        // return new Promise(resolve=>{
        //     console.log(222)
        //     resolve()
        // })
    }
}
module.exports = Ops
