import cookie from "cookie";
const USERNAME = process.env.ADMIN_USERNAME;
const PASSWORD = process.env.ADMIN_PASSWORD;
const TOKEN = process.env.TOKEN;

const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (username === USERNAME && password === PASSWORD) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("successfull");
    }
    res.status(400).json("wrong credentials!");
  }
};

export default handler;
