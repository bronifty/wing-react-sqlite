bring cloud;
bring util;
bring http;

let apiUrl = util.env("API_URL");

let website = new cloud.Website(
  path: "./dist",
);

let api = new cloud.Api();
let db = new ex.Table(
  name: "messages",
  primaryKey: "id",
  columns: {
    "text" => ex.ColumnType.STRING
  }
);

api.get("/api", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
  return cloud.ApiResponse {
    status: 200,
    body: "Hello World"
  };
});

api.get("/api/messages", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
  let result = MutJson [];
  let var i = 0;
  for message in db.list() {
    result.setAt(i, message);
    i = i + 1;
  }
  return cloud.ApiResponse {
    status: 200,
    body: Json.stringify(result)
  };
});