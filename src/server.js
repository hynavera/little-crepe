import { createServer, Model} from "miragejs"

createServer({
  models: {
    dishes: Model,
  },

  seeds(server) {
    server.create("dish",
      {name: 'Salad', price: '12.99', 
        about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        image: "https://cdn.pixabay.com/photo/2017/06/22/14/20/salad-2430919_960_720.jpg"
      , id: "",
      },);
    server.create("dish",
      {name: 'Greek', price: '12.99', 
        about: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        image: "https://cdn.pixabay.com/photo/2017/06/22/14/20/salad-2430919_960_720.jpg"
      , id: "",
      },);
    },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/dishes", (schema, request) => {
      return schema.dishes.all()
    })

    // this.get("/dishes/:id", (schema, request) => {
    //   const id = request.params.id
    //   return schema.dishes.find(id)
    // })

  },
})