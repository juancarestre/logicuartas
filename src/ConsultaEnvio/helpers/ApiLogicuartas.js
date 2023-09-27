
//consumimos el api de don stiven
export const ApiLogicuartas = async(numeroGuia) => {

let configg = await fetch('/config.json')
configg = await configg.json()

let myHeaders = new Headers();
myHeaders.append("Authorization", configg.APIAuthorization);
myHeaders.append("Content-Type", "application/json");

let body = JSON.stringify({
  "codigoGuia": numeroGuia
});

//armamos peticion
let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: body,
  // redirect: 'follow'
};
console.log(configg.APIRuta)
try {
  const result = await fetch(configg.APIRuta, requestOptions)
  const jsonResponse = await result.json()
  return jsonResponse
} catch (error) {
  console.log('error', error);
}

}

