var express=require('express');
var app=express();
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function pull_ov() {
  const { stdout, stderr } = await exec('cd /home/trung/apps/client && git pull && npm install && npm run build && cd /home/trung/apps/server && git pull && npm install');
  console.log('out:', stdout);
  console.log('err:', stderr);
}
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
})
app.get('/pricing',(req,res)=>{
    res.render('pricing');
})
app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/cover',(req,res)=>{
    res.render('cover');
})
app.post('/pull',(req,res)=>{
    pull_ov();
    res.json({status:"sucess"});
})
app.get('/',(req,res)=>{
    res.render('intro');
})
app.get('/signup',(req,res)=>{
    res.render('signup');
})
app.listen(19999);