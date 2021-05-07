const Mock = require('mockjs')

const data = Mock.mock({
  'student|50': [{
    id: '@integer(1, 50)',
    name: '@name'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/student/list',
    type: 'get',
    response: config => {
      const students = data.student
      return {
        code: 20000,
        data: {
          total: students.length,
          students: students
        }
      } 
    }
  }
]
