function tellStory(array){
let storyPerson = [`This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]} . They are ${array[2]} all day. The end.`];
return storyPerson;
}
let story = ["Mihail", "happy" , "programing"];
console.log(tellStory(story));