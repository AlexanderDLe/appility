"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = require("./routes/auth");
var cookie_session_1 = __importDefault(require("cookie-session"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(cookie_session_1.default({ keys: ['randomString'] }));
app.use(auth_1.router);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Listening on port " + PORT); });
