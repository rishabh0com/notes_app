// client ID from google cloud
// 143817650055-6d4sn9h6gvfkqp61qcglq6c38vf0q00r.apps.googleusercontent.com

const express = require("express");
const moment = require("moment");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const oAuth2Strategy = require("passport-google-oauth2").Strategy;
const connection = require("./config/database");
const noteRoutes = require("./src/routes/note.routes.js");
const userRoutes = require("./src/routes/user.routes.js");
const UserModel = require("./src/models/user.model.js");
require("dotenv").config();

const app = express();
const PORT = 4000;

// middleware :
app.use(express.json());
app.use((req, res, next) => {
  console.log(
    `Method : ${req.method} -> Path : ${req.url} -> On:  ${moment().format(
      "hh:mm:ss"
    )}`
  );
  next();
});
// cors
app.use(
  cors({
    origin: process.env.ORIGIN,
    method: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
// setup session :
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// setup passport :
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new oAuth2Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["email", "profile"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("google profile: ", profile);
      try {
        let user = await UserModel.findOne({ googleId: profile.id });
        if (!user) {
          user = await UserModel({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            displayImage: profile.photos[0].value,
          }).save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// intialize google login :
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.SUCCESS_REDIRECT_URL,
    failureRedirect: process.env.FAILURE_REDIRECT_URL,
  })
);

// notes routes :
app.use("/notes", noteRoutes);
//user routes :
app.use("/users", userRoutes);

// run the server :
app.listen(PORT, async () => {
  try {
    console.log("Server is running on port", PORT);
    await connection;
  } catch (error) {
    console.log("Error: ", error);
  }
});
