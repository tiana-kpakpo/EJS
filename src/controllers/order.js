//db connection

const knex = require("../../config/db");

const OrderController = {
  // read
  getOrders: async (req, res) => {
    let user = req.params.username;

    const orders = await knex("orders")
      .select('orders.*', 'meal.name', 'meal.price')
      .leftJoin('meal', 'meal.id', 'orders.meal_id')
      .where('orders.username', user);

    if (!orders) {
      res.status(409).json({ message: "No orders found" });
    }
    res.status(200).json({ orders: orders });
  },

  //read one
  getOrderById: async (req, res) => {
    let { username, orderId } = req.body;
    //select orders from table where username = user left join meals on meals.id = orders.meal_id
    const order = await knex("orders")
      //  .findOrFail()
      .where("username", username)
      .where("id", orderId)
      .leftJoin("meal", "meal.id", "orders.meal_id");

    if (!order) {
      res.status(409).json({ message: "Order not found" });
    }
    res.status(200).json({ order: order });
  },

  //delete one
  deleteOrder: async (req, res) => {
    let id = req.params.id;

    //delete order from table where id = id
    const order = await knex("orders").where("id", id).del();
    if (!order) {
      res.status(409).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  },

  // delete all

  deleteAllOrders: async (req, res) => {
    // delete all orders
    const order = await knex("orders").del();
    return res.status(200).json({ message: "All orders deleted successfully" });
  },
  //create
  createOrder: async (req, res) => {
    //insert into table meal_id, username
    const order = await knex("orders").insert([
      {
        meal_id: req.body.meal_id,
        username: req.body.username,
      },
    ]);
    if (!order) {
      res.status(409).json({ message: "Order not created" });
    }
    res.status(200).json({ message: "Order created successfully" });
  },
  updateOrder: async (req, res) => {
    try {
      const updatedOrder = await knex("orders").where("id", id).update();
      return res.status(200).json({ order: updatedOrder });
    } catch {}
  },

  test: (req, res) => {
    res.json({ message: "this is a test endpoint" });
  },
};

module.exports = OrderController;