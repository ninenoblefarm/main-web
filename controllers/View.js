 function capitalize(string) {
     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
 }
 const A = () => {
     const view = async(req, res) => {




         // console.log(req);
         let pathn = req.originalUrl;
         let pp = pathn.replace('/', "");
         if (pathn == "/") {
             pp = ""


             res.render('abc/index', {


             })
             return;
         }
         pathn = pathn.replace(/[&\\#,+()$~%.'":*<>{}]/g, '');
         console.log(pathn);
         path = pathn.replace(".html", "");
         path = pathn.replace("auth/", "");

         if (pathn.split("?").length > 0)
             path = pathn.split("?")[0];

         path = path.replace(".html", "");
         // path = pathn.replace("auth/", "");
         // let pa = path;
         console.log(path);
         if (path == "/") path = "/index";



         path += ".ejs";


         res.render('abc' + path, {


         })
     }

     const upline = async(req, res) => {



         res.render('abc/upline', {
             upline: req.params.upline

         })
         return;

     }





     return { view, upline };
 }

 module.exports = A;