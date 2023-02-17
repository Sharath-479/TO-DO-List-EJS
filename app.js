const express = require("express");
const bodyparser = require("body-parser");
const app = express();
let items=["cook food"];
let workitem=[];
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let Day = today.toLocaleDateString("en-us",options);

  res.render("List", {listtitle: Day, newlistitems: items});
});

app.post("/", function(req,res){
  let item = req.body.newitem;
  if(req.body.list==="work List"){
    workitem.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("List",{listtitle:"work List",newlistitems:workitem});
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
