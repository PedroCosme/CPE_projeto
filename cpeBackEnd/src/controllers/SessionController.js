const Firebase = require("../utils/Firebase");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports = {
  async signIn(request, response) {
    try {
      const { email, password } = request.body;
      let uid;
      try {
        uid = await Firebase.login(email, password);
      } catch (error) {
        return response
          .status(403)
          .json({ notification: "Invalid credentials" });
      }
      const user = await UserModel.getByFields({ firebase_id: uid });
      const AccessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30d",
      });
      return response.status(200).json({ user, AccessToken });
    } catch (error) {
      console.warn(error);
      return response
        .status(500)
        .json({ notification: "Error while trying to validate credentials" });
    }
  },
};
