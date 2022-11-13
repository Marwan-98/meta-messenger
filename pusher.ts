import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1506161",
  key: "1e9d6ae14096bd01bd52",
  secret: "4da907ee9c78238668f0",
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher("1e9d6ae14096bd01bd52", {
  cluster: "eu",
});
