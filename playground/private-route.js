app.post('/api/category', async (req,res)=>{

    const category = await models.Category.create(req.body);

    res.status(201).json({
        category,
    })

})



//Protected route
app.get('/protected', passport.authenticate('jwt', { session: false}), function(req,res){
  res.json({message: 'Congrates you are seeing this message because you are authroized'});
})
