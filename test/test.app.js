// PRIMERA FORMA DE HACER TEST

// const test = require('node:test')
// const assert = require('assert')
// const app = require ('../src/app')
// const request = require('supertest')

// test('First test',(t)=>{
//     assert.equal(1,1)
// })

// test('Should return a 200 status code', async (t)=>{
//      const response = await request(app).get('/users')
//      assert.equal(response.statusCode, 200)
// })

// test('Should return a 404 status code', async (t)=>{
//     const response = await request(app).get('/user/3')
//     assert.equal(response.statusCode, 404)
// })

//SEGUNDA FORMA DE HACER TEST
//puede usarse el it en lugar de test para detallar mejor la aplicacion
const {test, describe, it, mock} = require('node:test')
const assert = require('assert')
const app = require ('../src/app')
const request = require('supertest')
const UserService = require('../src/Services/userService')
const userService = new UserService()

describe('Initial tests', async ()=>{
 
    await test('First test',(t)=>{
        assert.equal(1,1)
    })
})

describe('Test user routes', async ()=>{

    await test('Should return a 200 status code', async (t)=>{
        const response = await request(app).get('/users')
        assert.equal(response.statusCode, 200)
   })
   
   await test('Should return a 404 status code', async (t)=>{
       const response = await request(app).get('/user/3')
       assert.equal(response.statusCode, 404)
   })
})

//mock permite simular el comportamiento de funciones 
const sum = mock.fn(
    (num1, num2) => {
    return num1 + num2
})

it('should return a correct result', ()=>{
    assert.strictEqual(sum(1,3), 4)
})


it('should return a user list', async ()=>{
    const getallUserMock = mock.fn(()=>{
        return [{id: 1, name : "Pablo" , lastname : "España", phone : "96656325", email : "pablo@gmail.com"}]
    })

    mock.method(userService, 'getAllUsersService', getallUserMock)

    assert.deepStrictEqual(await userService.getAllUsersService(), [{id: 1, name : "Pablo" , lastname : "España", phone : "96656325", email : "pablo@gmail.com"}])
})