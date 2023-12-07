const db = require('../index');

const postCategory = (req, res) => {
    console.log(req.body)
    db.collection('category').insertOne(req.body, (err, result) => {
        if(err) console.log('Error in submitting data')
        res.send({message: 'Submitted!!', response: result})  
    })
}

const getCategory = async (req, res) => {
    await db.collection('category').find({}).toArray((err, result) => {
        if(err) res.send('Error in fetching comprehension questions!')
        console.log(result)
        res.send({message: 'Fetched your question!', response: result})
    })
}

const Post = (req, res) => {
    console.log(req.body)
    db.collection('comprehension').insertOne(req.body, (err, result) =>{
        if(err) console.log('Error in submitting data')
        res.send({message: 'Submitted!!', response: result})  
    }
    )
}

const Get = async (req, res) => {
    await db.collection('comprehension').find({}).toArray((err, result) => {
        if(err) res.send('Error in fetching comprehension questions!')
        console.log(result)
        res.send({message: 'Fetched your question!', response: result})
    })
}

const clozePost = (req, res) => {
    console.log(req.body)
    db.collection('cloze').insertOne(req.body, (err, result) => {
        if(err) console.log('Error in inserting cloze')
        res.send({message: 'Submitted!', response: result})
    })
}

const clozeGet = async (req, res) => {
    await db.collection('cloze').find({}).toArray((err, result) => {
        if(err) console.log('Error while finding cloze')
        res.send({message: 'Fetched cloze question', response: result})
    })
}


module.exports = {
    comprePost: Post,
    compreGet: Get,
    clozePost: clozePost,
    clozeGet: clozeGet,
    postCategory: postCategory,
    getCategory: getCategory
}