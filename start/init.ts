import app from "@adonisjs/core/services/app";
import User form "#models/user";

app.booted(async () => {
  const user = await User.firstOrCreate({
    email: "test@example.com",
  }, {
    email: "test@example.com",
    password: "password"
  });
  console.log(user);
});
