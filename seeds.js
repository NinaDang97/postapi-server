const Post = require('./models');

const data = [
    {
        title: 'Paris',
        category: 'Travel',
        content: 'The cloud-piercing, wrought-iron Eiffel Tower, broad Arc de Triomphe guarding the glamorous avenue des Champs-Élysées, gargoyled Notre Dame cathedral, lamplit bridges spanning the Seine and art nouveau cafes wicker-chair-lined terraces are enduring Parisian emblems. '
    },
    {
        title: 'Puppy',
        category: 'Pet',
        content: 'You will be training your puppy from the moment you bring it home and start to house train. Puppies start learning from birth and good breeders begin handling and socialization right away. Some training can begin as soon as the puppy can open its eyes and walk. Young puppies have short attention spans but you can expect them to begin to learn simple obedience commands such as “sit,” “down,” and “stay,” as young as 7 to 8 weeks of age.'
    },
    {
        title: 'Javascript',
        category: 'Programming',
        content: 'Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.'
    }
]

function seedDB() {
    Post.remove({}, (err) => {
        if(err){
            console.log(err);
        } 
        console.log('Removed everything');
    })
    //add data to db
    data.forEach((post) => {
        Post.create(post, (err, post) => {
            if(err){
                console.log(err);
            } else {
                post.save();
            }
        })
    })
}

module.exports = seedDB;