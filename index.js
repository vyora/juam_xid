const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('dSx1mAm24x', uuidlib.v4());
	}

module.exports = generateId
