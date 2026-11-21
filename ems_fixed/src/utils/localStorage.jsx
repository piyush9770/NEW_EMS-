 const employees = [
  {
    id: 1,
    name: "Arjun",
    email: "e@e.com",
    password: "123",
    role: "employee",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        id: 101,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React.",
        taskDate: "2026-10-12",
        category: "Development"
      },
      {
        id: 102,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Fix the navigation bar alignment issue.",
        taskDate: "2026-10-10",
        category: "Bug Fix"
      },
      {
        id: 103,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document the login page components.",
        taskDate: "2026-10-14",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    name: "Rahul",
    email: "employee2@example.com",
    password: "123",
    role: "employee",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        id: 201,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build the employee dashboard UI.",
        taskDate: "2026-10-13",
        category: "Development"
      },
      {
        id: 202,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update CSS",
        taskDescription: "Improve dashboard styling and responsiveness.",
        taskDate: "2026-10-15",
        category: "Design"
      },
      {
        id: 203,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Login API",
        taskDescription: "Verify login API responses and errors.",
        taskDate: "2026-10-11",
        category: "Testing"
      }
    ]
  },

  {
    id: 3,
    name: "Aman",
    email: "employee3@example.com",
    password: "123",
    role: "employee",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        id: 301,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Registration Form",
        taskDescription: "Create a registration form with validation.",
        taskDate: "2026-10-12",
        category: "Development"
      },
      {
        id: 302,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for form validation.",
        taskDate: "2026-10-16",
        category: "Testing"
      },
      {
        id: 303,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Pull Requests",
        taskDescription: "Review and test pending code changes.",
        taskDate: "2026-10-09",
        category: "Code Review"
      }
    ]
  },

  {
    id: 4,
    name: "Rohit",
    email: "employee4@example.com",
    password: "123",
    role: "employee",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        id: 401,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Integrate API",
        taskDescription: "Connect the dashboard to the backend API.",
        taskDate: "2026-10-13",
        category: "Development"
      },
      {
        id: 402,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Profile Page",
        taskDescription: "Add employee profile details and edit functionality.",
        taskDate: "2026-10-17",
        category: "Development"
      },
      {
        id: 403,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Form Validation",
        taskDescription: "Resolve validation errors in the profile form.",
        taskDate: "2026-10-10",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 5,
    name: "Vikram",
    email: "employee5@example.com",
    password: "123",
    role: "employee",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        id: 501,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription: "Test dashboard features across different screen sizes.",
        taskDate: "2026-10-14",
        category: "Testing"
      },
      {
        id: 502,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Reports Page",
        taskDescription: "Build a page to display employee reports.",
        taskDate: "2026-10-18",
        category: "Development"
      },
      {
        id: 503,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Reduce image sizes to improve page performance.",
        taskDate: "2026-10-11",
        category: "Optimization"
      }
    ]
  }
]; 


const admin = [
  {
    id: 1,
    name: "Admin",
    email: "admin@example.com",
    password: "123",
    role: "admin"
  }
]; 

export { employees, admin };


export const setLocalStorege = ()=>{


localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))

}

setLocalStorege()

export const getLocalStorage = ()=>{

 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))

 return {employees,admin}

}
  