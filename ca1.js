
//2----------------------------------------------------------------------------------
use bigdata_ca1_zeyan_liow

db.movies.insert(
[ 
{ title : "Fight Club", writer : "Chuck Palahniuk", year : 1999, actors : ["Brad Pitt","Edward Norton"] }, 
{ title : "Pulp Fiction", writer : "Quentin Tarantino", year : 1994, actors : ["John Travolta","Uma Thurman"] }, 
{ title : "Inglorious Basterds", writer : "Quentin Tarantino", year : 2009, actors : ["Brad Pitt","Diane Kruger","Eli Roth"] }, 
{ title : "The Hobbit: An Unexpected Journey", writer : "J.R.R. Tolkein", year : 2012, franchise : "The Hobbit" }, 
{ title : "The Hobbit: The Desolation of Smaug", writer : "J.R.R. Tolkein", year : 2013, franchise : "The Hobbit" }, 
{ title : "The Hobbit: The Battle of the Five Armies", writer : "J.R.R. Tolkein", year : 2012, franchise : "The Hobbit", synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." }, 
{ title : "Pee Wee Herman's Big Adventure" }, 
{ title : "Avatar" } 
]
)
//3------------------------------------------------------------------------------------
db.movies.find()

db.movies.find( { writer: "Quentin Tarantino"} )

db.movies.find({ actors: "Brad Pitt" })

db.movies.find({ franchise: "The Hobbit" })

db.movies.find( 
{ 
$and:[{year: { $gte: 1990 } }, {year: { $lte: 1999 } }] 
} 
)

db.movies.find( 
{ 
$or:[{year: { $lt: 2000 } }, {year: { $gt: 2010 } }] 
} 
)
//4------------------------------------------------------------------------------------
db.movies.find({ title : "The Hobbit: An Unexpected Journey" }).pretty()

db.movies.update(         
{ _id: ObjectId("5dbdc2fb72a327c0c4d45091") },  
{ $set:{ synopsis : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." } } 
)

db.movies.find({ title : "The Hobbit: The Desolation of Smaug" }).pretty()

db.movies.update(         
{ _id: ObjectId("5dbdc2fb72a327c0c4d45092") },  
{ $set:{ synopsis : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." } } 
)

db.movies.find({ title : "Pulp Fiction" }).pretty()

db.movies.update(         
{ _id: ObjectId("5dbdc2fb72a327c0c4d4508f") },  
{ $addToSet:{ actors : "Samuel L. Jackson" } } 
)

//5-------------------------------------------------------------------------------------------------
//https://stackoverflow.com/questions/10610131/checking-if-a-field-contains-a-string
db.movies.find({ synopsis : {$regex : ".*Bilbo.*"}})
db.movies.find({ synopsis : {$regex : ".*Gandalf.*"}})
db.movies.find({ $and: [{ synopsis : {$regex : ".*Bilbo.*"}},{ synopsis : { $not : {$regex : ".*Gandalf.*"}}}]})
db.movies.find({ $or: [{ synopsis : {$regex : ".*dwarves.*"}},{ synopsis : {$regex : ".*hobbit.*"}}]})
db.movies.find({ $and: [{ synopsis : {$regex : ".*gold.*"}},{ synopsis : {$regex : ".*dragon.*"}}]})

//6---------------------------------------------------------------------------------------

db.movies.deleteMany( { title: { $in: [ "Pee Wee Herman's Big Adventure", "Avatar"] } } )

////7---------------------------------------------------------------------------------------

db.users.insert(
[ 
{ username : "GoodGuyGreg", first_name : "Good Guy", last_name : "Greg" }, 
{ username : "ScumbagSteve", full_name : {first : "Scumbag", last : "Steve"} }
]
)

db.posts.insert(
[ 
{ user : ObjectId("5dbdde3672a327c0c4d45096"), title : "Passes out at party", body : "Wakes up early and cleans house" }, 
{ user : ObjectId("5dbdde3672a327c0c4d45096"), title : "Steals your identity", body : "Raises your credit score" }, 
{ user : ObjectId("5dbdde3672a327c0c4d45096"), title : "Reports a bug in your code", body : "Sends you a Pull Request" }, 
{ user : ObjectId("5dbdde3672a327c0c4d45097"), title : "Borrows something", body : "Sells it" }, 
{ user : ObjectId("5dbdde3672a327c0c4d45097"), title : "Borrows everything", body : "The end" }, 
{ user : ObjectId("5dbdde3672a327c0c4d45097"), title : "Forks your repo on github", body : "Sets to private" }, 
]
)

db.comments.insert(
[ 
{ username : "GoodGuyGreg", comment : "Hope you got a good deal!", post : ObjectId("5dbdf29d72a327c0c4d450a4") },
{ username : "GoodGuyGreg", comment : "What's mine is yours!", post : ObjectId("5dbdf29d72a327c0c4d450a5") },
{ username : "GoodGuyGreg", comment : "Don't violate the licensing agreement!", post : ObjectId("5dbdf29d72a327c0c4d450a6") },
{ username : "ScumbagSteve", comment : "It still isn't clean", post : ObjectId("5dbdf29d72a327c0c4d450a1") },
{ username : "ScumbagSteve", comment : "Denied your PR cause I found a hack", post : ObjectId("5dbdf29d72a327c0c4d450a3") }
]
)

////8------------------------------------------------------------------------------------------

db.users.find()

db.posts.find()

db.posts.find({user : db.users.findOne({username : "GoodGuyGreg"})._id})

db.posts.find({user : db.users.findOne({username : "ScumbagSteve"})._id})

db.comments.find()

db.comments.find({username : "GoodGuyGreg"})

db.comments.find({username : "ScumbagSteve"})

db.comments.find({post : db.posts.findOne({title : "Reports a bug in your code"})._id})



















