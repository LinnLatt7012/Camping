var mongoose    = require("mongoose"),
    Campground  = require("./models/Campground"),
    Comment     = require("./models/Comment");

var data = [
    {   
        name:"Salmon Creek", 
        image: "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti illo aperiam atque adipisci laborum dolor voluptatibus dicta doloremque iste possimus. Cupiditate deserunt expedita maxime facere quis et, eius dicta. Obcaecati, tenetur quis velit minima accusamus distinctio corrupti odio, vel, fuga doloribus doloremque! Nobis necessitatibus vero maiores voluptatibus reprehenderit modi harum, cupiditate repellat totam, aut blanditiis doloremque illo sapiente ipsa autem voluptatum dolores quibusdam dolore, ducimus deleniti quos rem. Sapiente aut illum harum facilis eligendi animi in explicabo commodi praesentium, repellendus dolorum, accusamus officiis pariatur alias voluptate ex quibusdam nobis corporis, maxime blanditiis ab error! Labore maiores ea tempore autem nisi exercitationem eveniet distinctio, sint ab aperiam in itaque beatae nihil deleniti mollitia qui id, incidunt officiis et soluta unde neque corporis asperiores quas? Culpa doloremque voluptatem voluptas itaque dolore nostrum repellendus sunt quis non in, iure omnis? Sint, doloremque minus. Vitae, quasi ratione. Placeat ut eum molestiae officiis sed, quaerat aut sapiente, cum sit dicta hic neque enim magni provident. Quisquam, amet saepe enim sequi dolores beatae incidunt eveniet perspiciatis, ut, illo commodi! Possimus repellendus distinctio provident odio repudiandae, ut repellat voluptatem vitae voluptatum cum ipsum saepe natus facilis error minima, deleniti dolorem, aspernatur accusamus doloribus exercitationem cupiditate ad sint nostrum? Nisi obcaecati doloribus natus, distinctio ipsam unde ratione consequuntur quae at praesentium repellendus, deleniti dolorem! Quae odio natus ad iure amet unde harum commodi in adipisci nulla placeat consequuntur maxime, inventore dolorum. Eos at necessitatibus cum est. Possimus ullam at a, maiores ex dolores repellendus magnam veritatis laudantium deleniti facere fuga unde omnis iste, reprehenderit mollitia rem non magni? Doloribus sed distinctio culpa vero ex eligendi voluptatem laudantium ipsam, eaque earum harum ipsum quibusdam iusto maiores ducimus iste cupiditate, corporis nam dolorum! Nisi provident est nulla! Delectus aliquid consectetur ut libero dolorem nemo nisi quam alias itaque quasi nulla, eligendi sunt. Totam dolorem quae voluptatibus hic porro, architecto, voluptates eos nostrum ducimus veniam laboriosam vero. In, a eos! Repellat quia praesentium obcaecati officia, est accusantium, architecto unde vitae quaerat facere quas. Magnam repudiandae odio vero ullam, earum laudantium libero voluptates magni! Eligendi dolor vero nobis incidunt odio sunt enim sint architecto, labore laboriosam vel fugiat beatae expedita, voluptatibus voluptatum hic excepturi nesciunt velit recusandae deserunt. Obcaecati non quaerat quidem possimus voluptatibus pariatur corporis veritatis sit minus similique nulla dolorum voluptatem mollitia repellat eum eligendi, nemo doloribus magnam soluta, excepturi tempora voluptates nesciunt et! Eveniet repellat impedit sequi eius quas cupiditate fuga repudiandae nostrum, enim in aut? Eligendi veritatis, vitae beatae maxime itaque perspiciatis necessitatibus nam. Sunt quas illo ullam temporibus ratione excepturi molestiae omnis animi nisi quaerat in est rem nostrum pariatur sint cumque similique eligendi, molestias soluta minus? Qui maxime fuga ea repudiandae nostrum necessitatibus unde autem provident tempore distinctio esse quos sed nulla doloremque error id inventore quibusdam architecto eligendi, itaque modi. Reiciendis non maxime dolorum, debitis veniam quia quis recusandae molestias, ad perferendis libero natus laboriosam sed soluta minima necessitatibus aperiam? Dolore dignissimos commodi repellendus pariatur aperiam, sit sapiente sed quo neque, cupiditate rem, excepturi aut."},
    {
        name:"Salmon Creek", 
        image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti illo aperiam atque adipisci laborum dolor voluptatibus dicta doloremque iste possimus. Cupiditate deserunt expedita maxime facere quis et, eius dicta. Obcaecati, tenetur quis velit minima accusamus distinctio corrupti odio, vel, fuga doloribus doloremque! Nobis necessitatibus vero maiores voluptatibus reprehenderit modi harum, cupiditate repellat totam, aut blanditiis doloremque illo sapiente ipsa autem voluptatum dolores quibusdam dolore, ducimus deleniti quos rem. Sapiente aut illum harum facilis eligendi animi in explicabo commodi praesentium, repellendus dolorum, accusamus officiis pariatur alias voluptate ex quibusdam nobis corporis, maxime blanditiis ab error! Labore maiores ea tempore autem nisi exercitationem eveniet distinctio, sint ab aperiam in itaque beatae nihil deleniti mollitia qui id, incidunt officiis et soluta unde neque corporis asperiores quas? Culpa doloremque voluptatem voluptas itaque dolore nostrum repellendus sunt quis non in, iure omnis? Sint, doloremque minus. Vitae, quasi ratione. Placeat ut eum molestiae officiis sed, quaerat aut sapiente, cum sit dicta hic neque enim magni provident. Quisquam, amet saepe enim sequi dolores beatae incidunt eveniet perspiciatis, ut, illo commodi! Possimus repellendus distinctio provident odio repudiandae, ut repellat voluptatem vitae voluptatum cum ipsum saepe natus facilis error minima, deleniti dolorem, aspernatur accusamus doloribus exercitationem cupiditate ad sint nostrum? Nisi obcaecati doloribus natus, distinctio ipsam unde ratione consequuntur quae at praesentium repellendus, deleniti dolorem! Quae odio natus ad iure amet unde harum commodi in adipisci nulla placeat consequuntur maxime, inventore dolorum. Eos at necessitatibus cum est. Possimus ullam at a, maiores ex dolores repellendus magnam veritatis laudantium deleniti facere fuga unde omnis iste, reprehenderit mollitia rem non magni? Doloribus sed distinctio culpa vero ex eligendi voluptatem laudantium ipsam, eaque earum harum ipsum quibusdam iusto maiores ducimus iste cupiditate, corporis nam dolorum! Nisi provident est nulla! Delectus aliquid consectetur ut libero dolorem nemo nisi quam alias itaque quasi nulla, eligendi sunt. Totam dolorem quae voluptatibus hic porro, architecto, voluptates eos nostrum ducimus veniam laboriosam vero. In, a eos! Repellat quia praesentium obcaecati officia, est accusantium, architecto unde vitae quaerat facere quas. Magnam repudiandae odio vero ullam, earum laudantium libero voluptates magni! Eligendi dolor vero nobis incidunt odio sunt enim sint architecto, labore laboriosam vel fugiat beatae expedita, voluptatibus voluptatum hic excepturi nesciunt velit recusandae deserunt. Obcaecati non quaerat quidem possimus voluptatibus pariatur corporis veritatis sit minus similique nulla dolorum voluptatem mollitia repellat eum eligendi, nemo doloribus magnam soluta, excepturi tempora voluptates nesciunt et! Eveniet repellat impedit sequi eius quas cupiditate fuga repudiandae nostrum, enim in aut? Eligendi veritatis, vitae beatae maxime itaque perspiciatis necessitatibus nam. Sunt quas illo ullam temporibus ratione excepturi molestiae omnis animi nisi quaerat in est rem nostrum pariatur sint cumque similique eligendi, molestias soluta minus? Qui maxime fuga ea repudiandae nostrum necessitatibus unde autem provident tempore distinctio esse quos sed nulla doloremque error id inventore quibusdam architecto eligendi, itaque modi. Reiciendis non maxime dolorum, debitis veniam quia quis recusandae molestias, ad perferendis libero natus laboriosam sed soluta minima necessitatibus aperiam? Dolore dignissimos commodi repellendus pariatur aperiam, sit sapiente sed quo neque, cupiditate rem, excepturi aut."},
    {
        name:"Motorhome Camping", 
        image: "https://cdn.pixabay.com/photo/2016/11/15/23/43/motorhome-1827832__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti illo aperiam atque adipisci laborum dolor voluptatibus dicta doloremque iste possimus. Cupiditate deserunt expedita maxime facere quis et, eius dicta. Obcaecati, tenetur quis velit minima accusamus distinctio corrupti odio, vel, fuga doloribus doloremque! Nobis necessitatibus vero maiores voluptatibus reprehenderit modi harum, cupiditate repellat totam, aut blanditiis doloremque illo sapiente ipsa autem voluptatum dolores quibusdam dolore, ducimus deleniti quos rem. Sapiente aut illum harum facilis eligendi animi in explicabo commodi praesentium, repellendus dolorum, accusamus officiis pariatur alias voluptate ex quibusdam nobis corporis, maxime blanditiis ab error! Labore maiores ea tempore autem nisi exercitationem eveniet distinctio, sint ab aperiam in itaque beatae nihil deleniti mollitia qui id, incidunt officiis et soluta unde neque corporis asperiores quas? Culpa doloremque voluptatem voluptas itaque dolore nostrum repellendus sunt quis non in, iure omnis? Sint, doloremque minus. Vitae, quasi ratione. Placeat ut eum molestiae officiis sed, quaerat aut sapiente, cum sit dicta hic neque enim magni provident. Quisquam, amet saepe enim sequi dolores beatae incidunt eveniet perspiciatis, ut, illo commodi! Possimus repellendus distinctio provident odio repudiandae, ut repellat voluptatem vitae voluptatum cum ipsum saepe natus facilis error minima, deleniti dolorem, aspernatur accusamus doloribus exercitationem cupiditate ad sint nostrum? Nisi obcaecati doloribus natus, distinctio ipsam unde ratione consequuntur quae at praesentium repellendus, deleniti dolorem! Quae odio natus ad iure amet unde harum commodi in adipisci nulla placeat consequuntur maxime, inventore dolorum. Eos at necessitatibus cum est. Possimus ullam at a, maiores ex dolores repellendus magnam veritatis laudantium deleniti facere fuga unde omnis iste, reprehenderit mollitia rem non magni? Doloribus sed distinctio culpa vero ex eligendi voluptatem laudantium ipsam, eaque earum harum ipsum quibusdam iusto maiores ducimus iste cupiditate, corporis nam dolorum! Nisi provident est nulla! Delectus aliquid consectetur ut libero dolorem nemo nisi quam alias itaque quasi nulla, eligendi sunt. Totam dolorem quae voluptatibus hic porro, architecto, voluptates eos nostrum ducimus veniam laboriosam vero. In, a eos! Repellat quia praesentium obcaecati officia, est accusantium, architecto unde vitae quaerat facere quas. Magnam repudiandae odio vero ullam, earum laudantium libero voluptates magni! Eligendi dolor vero nobis incidunt odio sunt enim sint architecto, labore laboriosam vel fugiat beatae expedita, voluptatibus voluptatum hic excepturi nesciunt velit recusandae deserunt. Obcaecati non quaerat quidem possimus voluptatibus pariatur corporis veritatis sit minus similique nulla dolorum voluptatem mollitia repellat eum eligendi, nemo doloribus magnam soluta, excepturi tempora voluptates nesciunt et! Eveniet repellat impedit sequi eius quas cupiditate fuga repudiandae nostrum, enim in aut? Eligendi veritatis, vitae beatae maxime itaque perspiciatis necessitatibus nam. Sunt quas illo ullam temporibus ratione excepturi molestiae omnis animi nisi quaerat in est rem nostrum pariatur sint cumque similique eligendi, molestias soluta minus? Qui maxime fuga ea repudiandae nostrum necessitatibus unde autem provident tempore distinctio esse quos sed nulla doloremque error id inventore quibusdam architecto eligendi, itaque modi. Reiciendis non maxime dolorum, debitis veniam quia quis recusandae molestias, ad perferendis libero natus laboriosam sed soluta minima necessitatibus aperiam? Dolore dignissimos commodi repellendus pariatur aperiam, sit sapiente sed quo neque, cupiditate rem, excepturi aut."},
];
function seedDB(){
    
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }else{
            console.log("removed campgrounds!!");
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed,function(err, campground){
                    if(err){
                        console.log(err);                                                           
                    }else{
                        console.log("added a campground");
                        Comment.remove();
                        Comment.create({
                            text: "This place is so beautiful but I wish there is internet",
                            author : "psycho"
                        },function(err, comment){
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("a new comment create");
                            }
                        });
                    }
                });
            });
        }
    });
    
    //add a few  comments
}
module.exports = seedDB;