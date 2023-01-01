const request = require('supertest');
const app = require('../../app');

const WRONG_ID = "wrong-id";
const mockEmployee = {
    identityNumber: "12434213",
    firstName: "test",
    lastName: "test",
    departmentId: null
}

it('Should be pass with 201 /employees/create-employee', async () => {
    const res = await request(app).post(`/api/v1/employees/create-employee`).send(mockEmployee);
    expect(res.statusCode).toBe(201);
    expect(res.body.id).not.toBe(null);
});

it('Should be return 400 Throw Error /employees/create-employee', async () => {
    const res = await request(app).post(`/api/v1/employees/create-employee`).send({});

    expect(res.statusCode).toBe(400);
});

it('Should be pass with 200 /employees/get-all-employees', async () => {
    await request(app).post(`/api/v1/employees/create-employee`).send(mockEmployee);
    mockEmployee.name = "Test employee 2";
    await request(app).post(`/api/v1/employees/create-employee`).send(mockEmployee);

    const res = await request(app).get(`/api/v1/employees/get-all-employees`);

    expect(res.body.length).toBe(2);
    expect(res.statusCode).toBe(200);
});

it('Should be pass with 200 /employees/get-employee-by-id/:id', async () => {
    const employee = await request(app).post(`/api/v1/employees/create-employee`).send(mockEmployee);
    const res = await request(app).get(`/api/v1/employees/get-employee-by-id/${employee.body.id}`).expect(200);
    expect(res.body.name).toEqual(employee.body.name);
});

it('Should be return 400 Throw Error /employees/get-employee-by-id/:id', async () => {
    await request(app).get(`/api/v1/employees/get-employee-by-id/${WRONG_ID}`).expect(400);
});

it('Should be pass with 200 /employees/update-employee-by-id/:id', async () => {
    const employee = await request(app).post(`/api/v1/employees/create-employee`).send(mockEmployee);

    await request(app).put(`/api/v1/employees/update-employee-by-id/${employee.body.id}`).send({ name: "update test" }).expect(204);
});

it('Should be return 400 Throw Error /employees/update-employee-by-id/:id', async () => {
    await request(app).put(`/api/v1/employees/update-employee-by-id/${WRONG_ID}`).send({ firstName: "test" }).expect(400);
});

it('Should be pass with 200 /employees/delete-employee-by-id/:id', async () => {
    const employee = await request(app).post(`/api/v1/employees/create-employee`).send(mockEmployee);
    await request(app).delete(`/api/v1/employees/delete-employee-by-id/${employee.body.id}`).expect(204);
});

it('Should be return 400 Throw Error /employees/delete-employee-by-id/:id', async () => {
    await request(app).delete(`/api/v1/employees/delete-employee-by-id/${WRONG_ID}`).expect(400);
});


