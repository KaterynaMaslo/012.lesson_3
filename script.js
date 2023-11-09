const divUsers = document.getElementById("users");

const roles = {
	admin: "https://img.icons8.com/external-justicon-lineal-color-justicon/25/external-businessman-avatar-and-occupation-justicon-lineal-color-justicon.png",
	student: "https://img.icons8.com/external-konkapp-outline-color-konkapp/25/external-student-online-learning-konkapp-outline-color-konkapp.png",
	lector: "https://img.icons8.com/external-justicon-lineal-color-justicon/25/external-graphic-designer-avatar-and-occupation-justicon-lineal-color-justicon.png"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://img.icons8.com/bubbles/50/winner.png", 
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "https://img.icons8.com/bubbles/50/user-male.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://img.icons8.com/bubbles/50/bolivian-girl.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "https://img.icons8.com/bubbles/50/winner.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "https://img.icons8.com/bubbles/50/bolivian-girl.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "https://img.icons8.com/bubbles/50/user-male.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
]

class User{

    constructor(name, age, img, role, courses){
        this.name = name;
        this.age = age;
        this.img = img;
        this.role = role;
        this.courses = courses;
    }

    render(){ 
		const divUser = createDivWithClass("user");

		const divUserInfo = createDivWithClass("user__info");

			const divUserInfoData = createDivWithClass("user__info--data");

			const userImg = createImageWithAlt(this.img, this.name);
			divUserInfoData.appendChild(userImg);

			const divUserNaming = createDivWithClass("user__naming");
			const userName = createParagraph(`Name: <strong>${this.name}</strong>`);
			const userAge = createParagraph(`Age: <strong>${this.age}</strong>`);
			divUserNaming.appendChild(userName);
			divUserNaming.appendChild(userAge);
			

			const divUserInfoRole = createDivWithClasses([this.role, "user__info--role"]);
			const imgRole = createImageWithAlt(roles[this.role], this.role);
			const userRole = createParagraph(this.role);
			divUserInfoRole.appendChild(imgRole);
			divUserInfoRole.appendChild(userRole);

			divUserInfoData.appendChild(divUserNaming);

			const divUserCurses = createDivWithClass("user__courses");
			if (this.courses) {
				this.courses.forEach((course) => {
				const userCourse = createParagraph("", [this.role, "user__courses--course"]);


				/////////////////////////////////
				const userCourseRes = course.mark;
				console.log(gradation);
				userCourse.innerHTML = `${course.title} <span class="${userCourseRes}">${userCourseRes}</span>`;
				divUserCurses.appendChild(userCourse);
				});
			}

			divUserInfo.appendChild(divUserInfoData);
			divUserInfo.appendChild(divUserInfoRole);

			divUser.appendChild(divUserInfo);
			divUser.appendChild(divUserCurses);
			divUsers.appendChild(divUser);
    }

    renderCourses(){
    }
}

function createDivWithClass(className) {
	const div = document.createElement("div");
	div.className = className;
	return div;
  }
  
function createParagraph(text, classes = []) {
	const p = document.createElement("p");
	p.innerHTML = text;
	p.classList.add(...classes);
	return p;
}

function createImageWithAlt(src, alt) {
	const img = document.createElement("img");
	img.src = src;
	img.alt = alt;
	return img;
}

function createDivWithClasses(classList) {
	const div = document.createElement("div");
	div.classList.add(...classList);
	return div;
}

  
class Admin extends User{
    constructor(name, age, img, role, courses){
        super(name, age, img, role, courses);
    }

    renderCourses(){
    }
}

class Lector extends User{
    constructor(name, age, img, role, courses){
        super(name, age, img, role, courses);
    }

    renderCourses(){
    }
}

class Student extends User{
    constructor(name, age, img, role, courses){
        super(name, age, img, role, courses);
    }
}


users.map((user) => {
    return new User(user.name, user.age, user.img, user.role, user.courses);
}).forEach((user) => user.render());
