const posts = [
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'},
];

function getPosts(){

setTimeout(()=>{
let output ='';
posts.forEach((post,index)=>{

output +=`<li>${post.title}</li>`;
});
document.body.innerHTML = output;
},1000);

}

function createPost(post,callback){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    
            posts.push(post);
            callback();
            const error = false;

            if(!error){

                resolve();
            }else{
                reject('Error:Something went wrong');
            }

        },2000);
    

    });

}

const Promise1 = Promise.resolve('hello world');
const Promise2 = 10;
const Promise3 =  new Promise((resolve,reject)=> setTimeout(resolve,2000,'goodbye'));
Promise.all([Promise1,Promise2,Promise3]).then((
    (values)=>
    console.log(values)))





  createPost({title:'post three',body:'this is post three'},getPosts).then(getPosts).catch(err=>console.log(err));
 
function deletePost(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            if(posts.values!==0){
                resolve(posts.pop())
            }
             else{
                reject('Array is empty now');
             }


        },1000)
    })
}
createPost({title:'post three',body:'this is post three'},getPosts).then(getPosts).catch(err=>console.log(err)).then(deletePost).catch(err=>console.log(err));

