const API_BASED_URL = "https://api.tvmaze.com"; //common url for api
//async function to get response
export async function api_get(querystring) {
  const response = await fetch(`${API_BASED_URL}${querystring}`).then((r) =>
    r.json()
  );
  return response;
  //return response
}
