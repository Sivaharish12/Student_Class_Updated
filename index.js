



class student{
    static maximum_student_count=50;
    static count=0;
    static namelist=[]
    constructor(name,roll_no,departnment,phone_number,address,marks){
        if (student.count<=50){
            this.name=name;
            this.roll_no=roll_no;
            this.departnment=departnment;
            this.phone_number=phone_number;
            this.address=address;
            this.marks=marks;
            this.count_increment(this);
        }
        else{
            throw new Error("The class only takes upto 50 students");
        }
    }

    count_increment(obj){
        student.count+=1;
        student.namelist.push(obj);
    }

    static ClassDetail(){
        return `The Number of Students in this class is ${student.count}`
        
    }

        get fetchdetail(){
            return `name:${this.name} \nrollno:${this.roll_no} \ndepartnment:${this.departnment} \nphonenumber:${this.phone_number} \naddress:${this.address} \nmarks:${this.marks}`
        }

        get getmarks(){
            return this.marks;
        }

        set setmarks(marks){
            if(marks.length<=5){
                this.marks=marks;
                if (marks.length<5){
                    for(let i=marks.length-1;i<5;i++){
                        marks.push(0);
                    }
                }
                return marks;   
            }

            else{
                throw new Error("There are only 5 Total Subjects but you entered more than 5 subjects");
            }
            
        }

        get TotalMarks(){
            let total=0;
            this.marks.forEach(mark => {
                total+=mark
            });
            return total;
        }

}

function create_instance(name_of_the_instance,roll_no,departnment,phone_number,address,marks){
    var name_of_the_instance=new student(name_of_the_instance,roll_no,departnment,phone_number,address,marks);
    return name_of_the_instance
}

function totalmarks(stu){
    const total=stu.TotalMarks;
    return total;
}

function student_count(){
    return student.count;
}

console.log('\n');
console.log(student.ClassDetail());

//create
const hari=create_instance("hari",1,"CSE",9876543210,'vellakovil,Tamilnadu',[98,97,93,95,94]);
const manoj=create_instance("manoj",2,"physics",9876543210,'kangayem,Tamilnadu',[98,97,93,95,92]);
const kumar=create_instance("kumar",3,"ECE",9876543200,'erode,Tamilnadu',[98,97,93,95,90]);

console.log(`The Student Class contains  "${student_count()}"  instance objects`);


//fetch_detail
console.log(`The Detail of hari is discussed below:\n
${hari.fetchdetail}`
);


// getmarks
console.log(`The marks of hari is ${hari.getmarks}`);

// setmarks
hari.setmarks=[100,100,100,100,100]
console.log(`The marks of hari after setmarks ${hari.getmarks}`);


// the below code is for iterating the instances of the student class
console.log('\n');
console.log("The Entire Name List of the Students Present in the Class is Mentioned below :");
console.log('\n');
(student.namelist).forEach(name => {
    console.log(name.fetchdetail);
    console.log('\n \n');
});


// The classDetail function to count the no.of.students in the class
console.log(student.ClassDetail());
