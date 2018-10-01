const request = require("request");

const options = { 
	method: 'GET', 
	url: 'https://api.clever.com/v1.2/sections',
	headers : {
            "Authorization" : 'Bearer DEMO_TOKEN'
        }
};

const getSections = () => {

	return new Promise((res, rej) => {

		request(options, function (error, response, body) {

	  		if (error) rej(err)

	      	res(body)

		});
	})
	
}


const getAverage = async () => {


	 let sections = await getSections() 

     sections = JSON.parse(sections).data

     let totalStudents = 0

	   for (index in sections) {


	   	     totalStudents = totalStudents + sections[index].data.students.length
	   }
    

     let averageStudentsPerSection = Math.round(totalStudents / sections.length)

     console.log(averageStudentsPerSection)

}


getAverage()
