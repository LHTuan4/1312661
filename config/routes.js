

module.exports = function(express) {
    
    //API router
    var apiRouter = express.Router();
    var studentsRoutes = App.route('students');
    apiRouter.get("/students", studentsRoutes.get);
    apiRouter.get("/students/:id", studentsRoutes.getOne);
    apiRouter.post("/students", studentsRoutes.post);
    apiRouter.put("/students/:id", studentsRoutes.put);
    apiRouter.delete("/students", studentsRoutes.delAll);
    apiRouter.delete("/students/:id", studentsRoutes.del);
    
    //main router
    var router = express.Router();
    var navRoutes = App.route('nav');
    router.get(navRoutes.get);
    
    //Mount the apiRouter to main router
    router.use("/api", apiRouter);
    
    
    //-----------------
    return router;
}