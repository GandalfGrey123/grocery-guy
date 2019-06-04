
//change to use something else besides id later
const generateSessionToken = (length,id) => {
  return (
  	(Math.random(0).toString(36).slice(2,length) + id.toString()).substr(0,length)
  );
}

module.exports={ generateSessionToken }