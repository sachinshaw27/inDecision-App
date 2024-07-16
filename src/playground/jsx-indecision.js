console.log("App.js is running!")

//JSK - Javascript XML
const app = {
    title:"Indecision App",
    subtitle:"Put your life in the hands of computer",
    options: ['One','Two']
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value='';
        renderForm();
    }
    console.log("form submitted");
};
const OnRemoveAll = () => {
    app.options = [];
    renderForm();
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    //console.log(randomNum);
}
const numbers = [55,101,1];
const renderForm = () => {
    const template = (
        <div>
           <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           <p>{app.options.length>0 ? "Here are your options" : "No option"}</p>
           <button disabled={app.options.length==0} onClick={onMakeDecision}>What can I do?</button>
           <button onClick={OnRemoveAll}>RemoveAll</button>
           
           <ol>
               {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
               }
            </ol>
           
           <form onSubmit={onFormSubmit}>
               <input type="text" name="option" >
               </input>
               <button>Add Option</button>
           </form>
        </div>
       );
    ReactDOM.render(template,appRoot);
};
const appRoot=document.getElementById('app');
renderForm();

const user = {
    name: 'Sachin',
    age:22,
    loc:'India'
};
function getLocation(location){
    if(location) 
    return <p>Location: {location}</p>;
}
const template2= (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
        {getLocation(user.loc)}
        
    </div>
);


//>cd D:\Web-Dev\React-course-projects\indecision-app 

//npx babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react --watch

//live-server public