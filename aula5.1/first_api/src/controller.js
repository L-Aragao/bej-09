const fs = require("fs")

const path = "/Users/mac_luiz/Documents/Workspace/bej-09/aula5.1/first_api/src/dados/user.txt";

const create = (req, res) => {
    console.log(req.body)
    
    let user =  JSON.stringify(req.body)
    fs.appendFile(path, user+"\n", (err) =>{
        if(err){
            console.error(err)
            res.status(400).json("error: 'Erro'")
        }else{
            console.log("Sucesso")
            res.status(201).json('"status": "sucesso"')
        }
    })
}

exports.create = create;

  